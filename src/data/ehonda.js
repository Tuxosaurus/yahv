export const data = {
  name: "E.Honda",
  slug: "ehonda",
  srkWikiUrl: "https://srk.shib.live/w/Super_Street_Fighter_2_Turbo/E._Honda",
  normals: {
    stand_normals: {
      close_lp: {
        name: "Close LP",
        slug: "ehonda-normals-stand_normals-close_lp",
        damage: "20[1]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: "No",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "+8",
        steps: [
          {
            img: "stcljab16_stfarjab15_stclstrng16_stfarstrng17_stclfrc",
            frames: "1",
            status: "startup",
          },
          {
            img: "stcljab25_stclstrng25_stfarstrng26",
            frames: "2",
            status: "startup",
          },
          {
            img: "stcljab3_stclstrng3",
            frames: "2",
            status: "active",
          },
          {
            img: "stcljab4_stclstrng4",
            frames: "1",
            status: "recovery",
          },
          {
            img: "stcljab25_stclstrng25_stfarstrng26",
            frames: "1",
            status: "recovery",
          },
          {
            img: "stcljab16_stfarjab15_stclstrng16_stfarstrng17_stclfrc",
            frames: "1",
            status: "recovery",
          },
        ],
      },
      far_lp: {
        name: "Far LP",
        slug: "ehonda-normals-stand_normals-far_lp",
        damage: "20[1]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: "No",
        special_cancel: "No",
        super_cancel: "No",
        frame_advantage: "+4",
        steps: [
          {
            img: "stcljab16_stfarjab15_stclstrng16_stfarstrng17_stclfrc",
            frames: "2",
            status: "startup",
          },
          {
            img: "stfarjab24",
            frames: "3",
            status: "startup",
          },
          {
            img: "stfarjab3",
            frames: "4",
            status: "active",
          },
          {
            img: "stfarjab24",
            frames: "4",
            status: "recovery",
          },
          {
            img: "stcljab16_stfarjab15_stclstrng16_stfarstrng17_stclfrc",
            frames: "1",
            status: "recovery",
          },
        ],
      },
    },
  },
  specials: {
    hyakuretsu_harite: {
      lp: {
        name: "Hyakuretsu Harite LP",
        slug: "ehonda-specials-hyakuretsu_harite-lp",
        damage: "24[1] / 22[1]",
        stun: "5~11",
        stun_timer: "100",
        super_meter: "6",
        steps: [
          {
            img: "hhs113",
            frames: "2",
            status: "startup",
          },
          {
            img: "hhs29",
            frames: "3",
            status: "startup",
          },
          {
            img: "hhs3",
            frames: "4",
            status: "active",
          },
          {
            img: "hhs4",
            frames: "4",
            status: "active",
          },
          {
            img: "hhs5",
            frames: "4",
            status: "active",
          },
          {
            img: "hhs6",
            frames: "4",
            status: "active",
          },
          {
            img: "hhs7",
            frames: "4",
            status: "active",
          },
          {
            img: "hhs8",
            frames: "3",
            status: "active",
          },
          {
            img: "hhs29",
            frames: "5",
            status: "recovery",
          },
          {
            img: "hhs1012",
            frames: "2",
            status: "recovery",
          },
          {
            img: "hhs11",
            frames: "3",
            status: "recovery",
          },
          {
            img: "hhs1012",
            frames: "2",
            status: "recovery",
          },
          {
            img: "hhs113",
            frames: "1",
            status: "recovery",
          },
        ],
      },
      mp: {
        name: "Hyakuretsu Harite MP",
        slug: "ehonda-specials-hyakuretsu_harite-mp",
        damage: "26[2] / 24/[2]",
        stun: "5~11",
        stun_timer: "100",
        super_meter: "6",
        steps: [
          {
            img: "hhs113",
            frames: "4",
            status: "startup",
          },
          {
            img: "hhs29",
            frames: "4",
            status: "startup",
          },
          {
            img: "hhs3",
            frames: "2",
            status: "active",
          },
          {
            img: "hhs4",
            frames: "2",
            status: "active",
          },
          {
            img: "hhs5",
            frames: "2",
            status: "active",
          },
          {
            img: "hhs6",
            frames: "2",
            status: "active",
          },
          {
            img: "hhs7",
            frames: "2",
            status: "active",
          },
          {
            img: "hhs8",
            frames: "1",
            status: "active",
          },
          {
            img: "hhs29",
            frames: "7",
            status: "recovery",
          },
          {
            img: "hhs1012",
            frames: "2",
            status: "recovery",
          },
          {
            img: "hhs11",
            frames: "3",
            status: "recovery",
          },
          {
            img: "hhs1012",
            frames: "2",
            status: "recovery",
          },
          {
            img: "hhs113",
            frames: "1",
            status: "recovery",
          },
        ],
      },
      hp: {
        name: "Hyakuretsu Harite HP",
        slug: "ehonda-specials-hyakuretsu_harite-hp",
        damage: "28[3]/26[3]",
        stun: "5~11",
        stun_timer: "100",
        super_meter: "6",
        steps: [
          {
            img: "hhs113",
            frames: "5",
            status: "startup",
          },
          {
            img: "hhs29",
            frames: "6",
            status: "startup",
          },
          {
            img: "hhs3",
            frames: "1",
            status: "active",
          },
          {
            img: "hhs4",
            frames: "1",
            status: "active",
          },
          {
            img: "hhs5",
            frames: "1",
            status: "active",
          },
          {
            img: "hhs6",
            frames: "1",
            status: "active",
          },
          {
            img: "hhs7",
            frames: "1",
            status: "active",
          },
          {
            img: "hhs8",
            frames: "1",
            status: "active",
          },
          {
            img: "hhs29",
            frames: "8",
            status: "recovery",
          },
          {
            img: "hhs1012",
            frames: "3",
            status: "recovery",
          },
          {
            img: "hhs11",
            frames: "4",
            status: "recovery",
          },
          {
            img: "hhs1012",
            frames: "3",
            status: "recovery",
          },
          {
            img: "hhs113",
            frames: "1",
            status: "recovery",
          },
        ],
      },
    },
  },
};
