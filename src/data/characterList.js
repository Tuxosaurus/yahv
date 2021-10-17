export const characterList = {
  new: [
    {
      name: "Ryu",
      slug: "ryu",
    },
    {
      name: "E.Honda",
      slug: "ehonda",
    },
    {
      name: "Chun Li",
      slug: "chunli",
    },
    {
      name: "Ken",
      slug: "ken",
    },
  ],
  old: [
    {
      name: "Old Ryu",
      slug: "oryu",
    },
    {
      name: "Old Ken",
      slug: "oken",
    },
  ],
};

export const getCharacterFromCharacterSlug = (charcaterSlug) => {
  const newAndOld = characterList.new.concat(characterList.old);
  return newAndOld.filter((character) => character.slug === charcaterSlug)[0];
};

export const getPortrait = (characterSlug) => {
  if (!characterSlug || characterSlug === "-") {
    return null;
  }

  const img = require(`../assets/images/${characterSlug}/${characterSlug}_portrait.png`);

  if (!img) {
    return null;
  }

  return img.default;
};
