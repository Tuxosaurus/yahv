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

const getMoveStepsData = (steps) => {
  let number = 0;
  const firstOfGroup = {};
  const onlySteps = [];

  const items = Object.entries(steps).map((group) => ({
    key: `${group[0]}`,
    groupName: transfromSlugIntoLabel(group[0]),
    options: group[1].map((step, index) => {
      const slug = number;
      number += 1;

      if (index === 0) {
        firstOfGroup[group[0]] = slug;
      }

      const preferredName = `#${number} for ${step.frames} frame${
        step.frames > 1 ? "s" : ""
      }`;

      const name = `${preferredName} (${group[0]})`;

      onlySteps.push({
        slug: slug,
        name: name,
        img: step.img,
      });

      // for combobox
      return {
        slug: slug,
        name: name,
        preferredName: preferredName,
      };
    }),
  }));

  return {
    totalSteps: number,
    firstOfGroup: firstOfGroup,
    comboboxSteps: items,
    onlySteps: onlySteps,
  };
};

export const getMoveDataFromMoveSlug = (moveSlug) => {
  if (!moveSlug || moveSlug === "-") {
    return null;
  }

  const parts = splitMoveSlug(moveSlug);

  const moveData =
    allData[parts.character][parts.category][parts.stance][parts.move];

  const stepsData = getMoveStepsData(moveData.steps);

  return {
    ...moveData,
    ...stepsData,
  };
};

export const getStepImageFilename = (characterSlug, step) => {
  const stepFilename = `${characterSlug}/${characterSlug}_${step.img}.png`;

  return stepFilename;
};
