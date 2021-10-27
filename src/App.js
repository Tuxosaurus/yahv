import React, { useContext, useState } from "react";

import { HotkeysModal } from "./components/hotkeysModal.js";
import { LegendModal } from "./components/legendModal.js";
import { Modal } from "./components/modal.js";
import { PlayerForm } from "./components/playerForm.js";
import {
  isUsingDarkTheme,
  hasDisabledTooltips,
  preferredNotation,
  validNotations,
  store,
} from "./components/store.js";
import { Viewer } from "./components/viewer.js";

import "./styles/app.css";

export const App = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const hasP1Move = state.p1.selectedMoveSlug !== "-";
  const hasP2Move = state.p2.selectedMoveSlug !== "-";
  const [useDarkTheme, setUseDarkTheme] = useState(isUsingDarkTheme);
  const [disabledTooltips, setDisabledTooltips] = useState(hasDisabledTooltips);
  const [newPreferredNotation, setNewPreferredNotation] =
    useState(preferredNotation);

  function handleNotationChange(event) {
    const eventValue = event.target.value;
    if (validNotations.includes(eventValue)) {
      setNewPreferredNotation(eventValue);
      window.localStorage.setItem("preferredNotation", eventValue);
      dispatch({ type: "notationChange", payload: eventValue });
    }
  }

  function handleThemeChange(event) {
    setUseDarkTheme(event.target.checked);
    window.localStorage.setItem(
      "darkTheme",
      JSON.stringify(event.target.checked)
    );
  }

  function handleTooltipsChange(event) {
    setDisabledTooltips(event.target.checked);
    window.localStorage.setItem(
      "tooltips",
      JSON.stringify(event.target.checked)
    );
  }

  function toggleSettings() {
    dispatch({
      type: "modalChange",
      payload: state.modal === null ? "modalSettings" : null,
    });
  }

  const appClassNames = () => {
    let baseClassName = "App";

    if (useDarkTheme) {
      baseClassName += " dark-theme";
    }

    if (disabledTooltips) {
      baseClassName += " disabled-tooltips";
    }

    if (state.modal !== null) {
      baseClassName += " disabled-scroll";
    }

    return baseClassName;
  };

  return (
    <div className={appClassNames()}>
      <main className="App-main">
        <div className="App-playerForms">
          <PlayerForm playerId="p1" />
          <PlayerForm playerId="p2" />
        </div>
        {(hasP1Move || hasP2Move) && <Viewer />}
      </main>
      <header className="App-header">
        <h1>
          <span>Super Street Fighter 2X/ST</span>
          <abbr aria-label="Yet Another Hitbox Viewer">YAHV</abbr>
          <span>
            powered by&nbsp;
            <a
              href="https://srk.shib.live/w/Super_Street_Fighter_2_Turbo"
              target="_blank"
              rel="noreferrer noopener"
            >
              SRK Wiki
            </a>
          </span>
        </h1>
      </header>
      <footer className="App-footer">
        <section className="App-settings">
          <button
            onClick={toggleSettings}
            aria-controls="modalSettings"
            aria-expanded={state.modal === "modalSettings"}
          >
            Open user settings
          </button>
        </section>
        <p>
          Special thanks to the&nbsp;
          <a
            href="https://discord.com/invite/YHdDM6z"
            target="_blank"
            rel="noreferrer noopener"
          >
            French Discord
          </a>
          <br />
          <a
            href="https://twitter.com/Tuxosaurus"
            target="_blank"
            rel="noreferrer noopener"
          >
            Tuxosaurus
          </a>
          &nbsp;&#8471;2021
        </p>

        <p className="App-warning">Best viewed on large devices</p>
      </footer>

      <Modal id="modalSettings" title="User Settings">
        <p className="subtitle">Saved in the browser's Local Storage</p>

        <h3>Dark mode</h3>
        <label>
          Less flashy/darker theme (defaults to system settings):&nbsp;
          <input
            type="checkbox"
            name="darkTheme"
            onChange={handleThemeChange}
            checked={useDarkTheme ? "checked" : ""}
          />
        </label>
        <h3>Notation</h3>
        <table>
          <thead>
            <tr>
              <th>
                <label>
                  World&nbsp;
                  <input
                    type="radio"
                    name="fhtagn"
                    value="therightway"
                    onChange={handleNotationChange}
                    checked={newPreferredNotation === "therightway"}
                  />
                </label>
              </th>
              <th>
                <label>
                  USA&nbsp;
                  <input
                    type="radio"
                    name="fhtagn"
                    value="usa"
                    onChange={handleNotationChange}
                    checked={newPreferredNotation === "usa"}
                  />
                </label>
              </th>
              <th>
                <label>
                  Both&nbsp;
                  <input
                    type="radio"
                    name="fhtagn"
                    value="both"
                    onChange={handleNotationChange}
                    checked={newPreferredNotation === "both"}
                  />
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                LP
                <br />
                MP
                <br />
                HP
                <br />
                LK
                <br />
                MK
                <br />
                HK
              </td>
              <td>
                JAB
                <br />
                STRONG
                <br />
                FIERCE
                <br />
                SHORT
                <br />
                FORWARD
                <br />
                ROUNDHOUSE
              </td>
              <td>
                LP (jab)
                <br />
                MP (strong)
                <br />
                HP (fierce)
                <br />
                LK (short)
                <br />
                MK (forward)
                <br />
                HK (roundhouse)
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Tooltips</h3>
        <label>
          Disable tooltips:&nbsp;
          <input
            type="checkbox"
            name="tooltips"
            onChange={handleTooltipsChange}
            checked={disabledTooltips}
          />
        </label>
      </Modal>

      <Modal id="modalHotkeysHelp" title="Available keyboard hotkeys">
        <HotkeysModal />
      </Modal>

      <Modal id="modalLegend" title="Hitbox colors legend">
        <LegendModal />
      </Modal>
    </div>
  );
};
