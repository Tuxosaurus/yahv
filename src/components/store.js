import { createContext, useReducer } from "react";

const localStorage = window.localStorage;
const hasLocalStorageDarkTheme = localStorage.getItem("darkTheme") !== null;
const browserUsesDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

export const isUsingDarkTheme = hasLocalStorageDarkTheme
  ? JSON.parse(localStorage.getItem("darkTheme"))
  : browserUsesDarkMode;

const urlParams = new URLSearchParams(window.location.search);

const darkBg = "#333";
const mediumBg = "#777";
const brightBg = "#aaa";
export const validBgs = [darkBg, mediumBg, brightBg];
const defaultBg = isUsingDarkTheme ? 0 : 1;

export const validZooms = ["1", "2", "3"];

function isValidBackground(b) {
  return b && b <= validBgs.length;
}

function isValidZoom(z) {
  return z && validZooms.includes(z);
}

const defaultPlayerState = {
  selectedCharacterSlug: "-",
  selectedMoveSlug: "-",
  selectedStepNumber: 0,
  mirror: false,
  transparent: false,
};

const getPlayerStateFromUrl = (playerId, url) => {
  if (!playerId || !url) {
    return defaultPlayerState;
  }

  // &p1=chunli-normals-stand_normals-far_lp-1
  const searchParams = new URLSearchParams(url.search).get(playerId);
  if (!searchParams) {
    return defaultPlayerState;
  }

  const searchParts = searchParams.split("-");
  const characterSlug = searchParts[0];
  const stepOptions = searchParts.pop();
  const moveSlug = searchParts.join("-");

  return {
    selectedCharacterSlug: characterSlug,
    selectedMoveSlug: moveSlug,
    selectedStepNumber: parseInt(stepOptions),
    transparent: stepOptions.includes("t"),
    mirror: stepOptions.includes("m"),
  };
};

const defaultState = {
  p1: {
    ...getPlayerStateFromUrl("p1", window.location),
  },
  p2: {
    ...getPlayerStateFromUrl("p2", window.location),
  },
  forward: urlParams.get("fwd") || "p1",
  background: isValidBackground(urlParams.get("bg"))
    ? urlParams.get("bg")
    : defaultBg,
  zoom: isValidZoom(urlParams.get("zoom")) ? urlParams.get("zoom") : 2,
  cps2: urlParams.get("cps2") || false,
  scanlines: urlParams.get("scanlines") || false,
};

export const store = createContext(defaultState);
const { Provider } = store;

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const playerId = action.payload?.playerId;
    const playerState = playerId ? state[playerId] : null;

    switch (action.type) {
      case "characterSlugChange":
        return {
          ...state,
          [playerId]: {
            selectedCharacterSlug: action.payload.selectedCharacterSlug,
            selectedMoveSlug: "-",
            selectedStepNumber: 0,
          },
        };
      case "moveSlugChange":
        return {
          ...state,
          [playerId]: {
            ...playerState,
            selectedMoveSlug: action.payload.selectedMoveSlug,
            selectedStepNumber: 0,
          },
        };
      case "stepNumberChange":
        return {
          ...state,
          [playerId]: {
            ...playerState,
            selectedStepNumber: action.payload.selectedStepNumber,
          },
        };
      case "mirrorChange":
        return {
          ...state,
          [playerId]: {
            ...playerState,
            mirror: !playerState.mirror,
          },
        };
      case "transparentChange":
        return {
          ...state,
          [playerId]: {
            ...playerState,
            transparent: !playerState.transparent,
          },
        };
      case "forwardChange":
        return { ...state, forward: action.payload };
      case "backgroundChange":
        return {
          ...state,
          background: isValidBackground(action.payload) ? action.payload : 1,
        };
      case "zoomChange":
        return {
          ...state,
          zoom: isValidZoom(action.payload) ? action.payload : 1,
        };
      case "cps2Change":
        return { ...state, cps2: !state.cps2 };
      case "scanlinesChange":
        return { ...state, scanlines: !state.scanlines };
      default:
        throw new Error();
    }
  }, defaultState);

  return <Provider value={{ dispatch, state }}>{children}</Provider>;
};
