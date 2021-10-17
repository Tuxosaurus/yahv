import React, { useRef, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

import "../styles/combobox.css";

const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_ENTER = 13;

const defaultFilterSearched = (option, searched) => {
  const completeName = `${option.name}-${option.slug}`;

  const searchedParts = searched.split(" ");
  // best results with to 2 words query
  const regex = new RegExp(
    `${searchedParts.join(".*")}|${searchedParts.reverse().join(".*")}`,
    "ig"
  );

  return completeName.match(regex);
};

const renderListItem = (
  listItem,
  handleSelectItem,
  lastSelectedItemSlug,
  filterSearched,
  searched,
  playerId
) => {
  const isGroup = !!listItem.groupName;
  if (isGroup) {
    return (
      <li
        key={`${listItem.key}-${playerId}`}
        className="Combobox-group"
        role="group"
      >
        <p>{listItem.groupName}</p>
        <ul>
          {/* recursion \o/ */}
          {listItem.options
            .filter((option) => filterSearched(option, searched))
            .map((option) =>
              renderListItem(option, handleSelectItem, lastSelectedItemSlug)
            )}
        </ul>
      </li>
    );
  }

  const isOptionSelected = lastSelectedItemSlug === listItem.slug;

  return (
    <li
      role="option"
      className={`Combobox-option${isOptionSelected ? " selected" : ""}`}
      aria-selected={isOptionSelected}
      key={`${listItem.slug}-${playerId}`}
      data-slug={listItem.slug}
      data-name={listItem.preferredName ?? listItem.name}
      onClick={handleSelectItem}
    >
      {listItem.preferredName ?? listItem.name}
    </li>
  );
};

export const Combobox = ({
  purpose,
  placeholder,
  listItems,
  playerId,
  alreadySelectedItem,
  filterSearched = defaultFilterSearched,
  selectOption,
}) => {
  const [searched, setSearched] = useState("");
  const [lastFocusedIndex, setLastFocusedIndex] = useState(null);
  const comboRef = useDetectClickOutside({ onTriggered: closeDropdown });
  const searchRef = useRef(null);
  const listRef = useRef(null);
  const getSearchValue = () => {
    return alreadySelectedItem && alreadySelectedItem.name && searched === ""
      ? alreadySelectedItem.name
      : searched;
  };

  function openDropdown() {
    if (comboRef.current) {
      comboRef.current?.classList.add("displayed");
      comboRef.current.setAttribute("aria-expanded", true);
    }
  }

  function closeDropdown() {
    if (comboRef.current) {
      comboRef.current.classList.remove("displayed");
      comboRef.current.setAttribute("aria-expanded", false);
    }
  }

  function handleFocus() {
    if (searchRef.current) {
      searchRef.current.value = "";
    }

    setSearched("");
    openDropdown();
  }

  function handleSearch(event) {
    setSearched(event.target.value);
  }

  function handleSelectItem(event, item = null) {
    const selectedName = item
      ? item.dataset["name"]
      : event.target.dataset["name"];
    const selectedSlug = item
      ? item.dataset["slug"]
      : event.target.dataset["slug"];

    selectOption(selectedSlug);

    if (searchRef.current) {
      searchRef.current.value = selectedName;
    }

    setSearched("");
    closeDropdown();
  }

  function handleKeyDown(event) {
    let focusableItems = [];
    if (listRef.current) {
      if (listRef.current.firstChild.getAttribute("role") === "group") {
        // check within "group" items for "option" items
        listRef.current.childNodes.forEach((child) => {
          if (child.childNodes.length > 0) {
            focusableItems = focusableItems.concat(
              ...child.lastChild.childNodes
            );
          }
        });
      } else {
        focusableItems = listRef.current.childNodes;
      }
    }

    function setItemFocus(index) {
      if (focusableItems[index]) {
        if (lastFocusedIndex !== null) {
          unsetItemFocus(lastFocusedIndex);
        }

        listRef.current.scrollTop = index * 22; // approximate value

        focusableItems[index].focus();
        focusableItems[index].setAttribute("aria-selected", true);
        focusableItems[index].classList.add("focused");
        setLastFocusedIndex(index);
      }
    }

    function unsetItemFocus(index) {
      if (focusableItems[index]) {
        focusableItems[index].blur();
        focusableItems[index].setAttribute("aria-selected", false);
        focusableItems[index].classList.remove("focused");
      }
    }

    if (listRef.current) {
      switch (event.keyCode) {
        case KEY_DOWN: {
          event.preventDefault();
          setItemFocus(
            lastFocusedIndex !== null &&
              lastFocusedIndex !== focusableItems.length - 1
              ? lastFocusedIndex + 1
              : 0
          );
          break;
        }
        case KEY_UP: {
          event.preventDefault();
          setItemFocus(
            lastFocusedIndex !== null && lastFocusedIndex !== 0
              ? lastFocusedIndex - 1
              : focusableItems.length - 1
          );
          break;
        }
        case KEY_ENTER: {
          event.preventDefault();
          if (lastFocusedIndex !== null) {
            handleSelectItem(event, focusableItems[lastFocusedIndex]);
          }
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  return (
    <div
      className={`Combobox Combobox-${playerId}`}
      aria-expanded={false}
      aria-haspopup="listbox"
      aria-owns={`listbox-${purpose}-${playerId}`}
      id={`combobox-${purpose}-${playerId}`}
      // eslint is wrong: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/789
      // eslint-disable-next-line
      role="combobox"
      ref={comboRef}
      onKeyDown={handleKeyDown}
    >
      <input
        className="Combobox-search"
        type="text"
        placeholder={placeholder}
        value={getSearchValue()}
        aria-autocomplete="list"
        aria-controls={`listbox-${purpose}-${playerId}`}
        id={`search-${purpose}-${playerId}`}
        onChange={handleSearch}
        onFocus={handleFocus}
        ref={searchRef}
      />
      <ul
        className="Combobox-list"
        id={`listbox-${purpose}-${playerId}`}
        ref={listRef}
        role="listbox"
      >
        {/* should distinguish between group & option items */}
        {listItems &&
          listItems.map((listItem) =>
            renderListItem(
              listItem,
              handleSelectItem,
              alreadySelectedItem?.slug,
              filterSearched,
              searched,
              playerId
            )
          )}
      </ul>
    </div>
  );
};
