import { data as ryuData } from "./ryu.js";
import { data as ehondaData } from "./ehonda.js";
import { data as chunliData } from "./chunli.js";
import { data as kenData } from "./ken.js";
import { data as okenData } from "./oken.js";
import { data as oryuData } from "./oryu.js";

const allData = {
  ryu: ryuData,
  ehonda: ehondaData,
  chunli: chunliData,
  ken: kenData,
  oken: okenData,
  oryu: oryuData,
};

export const transfromSlugIntoLabel = (slug) => {
  const slugWithSpaces = slug.replaceAll("_", " ").replaceAll("-", " ");

  return slugWithSpaces.charAt(0).toUpperCase() + slugWithSpaces.slice(1);
};

function splitMoveSlug(moveSlug) {
  const split = moveSlug.split("-");
  const slugParts = {
    character: split[0], // ryu
    category: split[1], // normals | specials
    stance: split[2], // stand | hadouken
    move: split[3], // close_lp | lp
  };

  return slugParts;
}

export const getCharacterDataFromCharacterSlug = (charcaterSlug) =>
  allData[charcaterSlug];

export const getMoveDataFromMoveSlug = (moveSlug) => {
  if (!moveSlug || moveSlug === "-") {
    return null;
  }

  const parts = splitMoveSlug(moveSlug);

  const moveData =
    allData[parts.character][parts.category][parts.stance][parts.move];

  return moveData;
};

const getMoveStepsDataFromMoveSlug = (moveSlug) => {
  if (!moveSlug || moveSlug === "-") {
    return null;
  }

  const moveData = getMoveDataFromMoveSlug(moveSlug);

  return moveData.steps;
};

export const getMoveMaxStepNumber = (moveSlug) => {
  const moveSteps = getMoveStepsDataFromMoveSlug(moveSlug);

  return moveSteps.length - 1;
};

export const getStepImageFilename = (moveSlug, stepNumber = 0) => {
  if (Number(stepNumber) < 0 || !moveSlug || moveSlug === "-") {
    return null;
  }

  const characterSlug = moveSlug.split("-")[0];
  const steps = getMoveStepsDataFromMoveSlug(moveSlug);
  const stepFilename = `${characterSlug}/${characterSlug}_${
    steps[Number(stepNumber)].img
  }.png`;

  return stepFilename;
};
