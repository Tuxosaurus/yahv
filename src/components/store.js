import { createContext, useReducer } from "react";

const defaultPlayerState = {
  selectedCharacterSlug: "-",
  selectedMoveSlug: "-",
  selectedStepNumber: 0,
};

const defaultForward = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("forward") || "p1";
};

const getPlayerStateFromUrl = (playerId, url) => {
  if (!playerId || !url) {
    return defaultPlayerState;
  }

  // &p1=chunli-normals-stand-far_lp-1
  const searchParams = new URLSearchParams(url.search).get(playerId);
  if (!searchParams) {
    return defaultPlayerState;
  }

  const searchParts = searchParams.split("-");
  const characterSlug = searchParts[0];
  const stepNumber = searchParts.pop();
  const moveSlug = searchParts.join("-");

  return {
    selectedCharacterSlug: characterSlug,
    selectedMoveSlug: moveSlug,
    selectedStepNumber: stepNumber,
  };
};

const defaultState = {
  p1: {
    ...getPlayerStateFromUrl("p1", window.location),
  },
  p2: {
    ...getPlayerStateFromUrl("p2", window.location),
  },
  forward: defaultForward(),
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
      case "forwardChange":
        return { ...state, forward: action.payload };
      default:
        throw new Error();
    }
  }, defaultState);

  return <Provider value={{ dispatch, state }}>{children}</Provider>;
};
