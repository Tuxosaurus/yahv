import React, { useContext, useState } from "react";

import { PlayerForm } from "./components/playerForm.js";
import { isUsingDarkTheme, store } from "./components/store.js";
import { Viewer } from "./components/viewer.js";

import "./styles/app.css";

export const App = () => {
  const globalState = useContext(store);
  const { state } = globalState;
  const hasP1Move = state.p1.selectedMoveSlug !== "";
  const hasP2Move = state.p2.selectedMoveSlug !== "";
  const [useDarkTheme, setUseDarkTheme] = useState(isUsingDarkTheme);

  function handleThemeChange(event) {
    setUseDarkTheme(event.target.checked);
    window.localStorage.setItem(
      "darkTheme",
      JSON.stringify(event.target.checked)
    );
  }

  return (
    <div className={`App${useDarkTheme ? " dark-theme" : ""}`}>
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
            powered by{" "}
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
          <label>
            Dark theme{" "}
            <input
              type="checkbox"
              name="darkTheme"
              onChange={handleThemeChange}
              checked={useDarkTheme ? "checked" : ""}
            />
          </label>
        </section>
        <p>
          Special thanks to the{" "}
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
          </a>{" "}
          &#8471;2021
        </p>

        <p className="App-warning">Best viewed on large devices</p>
      </footer>
    </div>
  );
};
