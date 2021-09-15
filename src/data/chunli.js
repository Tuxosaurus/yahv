export const data = {
  name: "Chun Li",
  slug: "chunli",
  neutrals: {
    //   stand: {
    //     neutral: {
    //       name: "Stand neutral",
    //       slug: "chunli-neutrals-stand-neutral",
    //       steps: [],
    //     },
    //     backward: {
    //       name: "Stand backward",
    //       slug: "chunli-neutrals-stand-backward",
    //       steps: [],
    //     },
    //     forward: {
    //       name: "Stand forward",
    //       slug: "chunli-neutrals-stand-forward",
    //       steps: [],
    //     },
    //   },
    //   crouch: {
    //     neutral: {
    //       name: "Crouch",
    //       slug: "chunli-neutrals-crouch-neutral",
    //       steps: [],
    //     },
    //   },
    jump: {
      wall_jump: {
        name: "Wall jump",
        slug: "chunli-neutrals-jump-wall_jump",
        steps: [
          {
            img: "wj",
            frames: "6",
          },
        ],
      },
      //     neutral: {
      //       name: "Jump neutral",
      //       slug: "chunli-neutrals-jump-neutral",
      //       steps: [],
      //     },
      //     diagonal: {
      //       name: "Jump diagonal",
      //       slug: "chunli-neutrals-jump-diagonal",
      //       steps: [],
      //     },
    },
  },
  normals: {
    stand: {
      close_lp: {
        name: "Close LP (jab)",
        slug: "chunli-normals-stand-close_lp",
        damage: "18[0]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: true,
        special_cancel: true,
        super_cancel: true,
        frame_advantage: "+5",
        steps: [
          {
            img: "stcljab15",
            frames: "2",
            status: "startup",
          },
          {
            img: "stcljab24",
            frames: "1",
            status: "startup",
          },
          {
            img: "stcljab3",
            frames: "4",
            status: "active",
          },
          {
            img: "stcljab24",
            frames: "3",
            status: "recovery",
          },
          {
            img: "stcljab15",
            frames: "1",
            status: "recovery",
          },
        ],
      },
      close_mp: {
        name: "Close MP (strong)",
        slug: "chunli-normals-stand-close_mp",
        damage: "22[1]",
        stun: "5~11",
        stun_timer: "60",
        chain_cancel: false,
        special_cancel: true,
        super_cancel: true,
        frame_advantage: "+10",
        steps: [
          {
            img: "stclstrng15",
            frames: "2",
            status: "startup",
          },
          {
            img: "stclstrng24",
            frames: "2",
            status: "startup",
          },
          {
            img: "stclstrng3",
            frames: "4",
            status: "active",
          },
          {
            img: "stclstrng24",
            frames: "3",
            status: "recovery",
          },
          {
            img: "stclstrng15",
            frames: "1",
            status: "recovery",
          },
        ],
      },
      close_hp: {
        name: "Close HP (fierce)",
        slug: "chunli-normals-stand-close_hp",
        damage: "24[1]",
        stun: "10~16",
        stun_timer: "80",
        chain_cancel: false,
        special_cancel: true,
        super_cancel: true,
        frame_advantage: "-9",
        steps: [
          {
            img: "stclfrc13",
            frames: "3",
            status: "startup",
          },
          {
            img: "stclfrc2",
            frames: "20",
            status: "active",
          },
          {
            img: "stclfrc13",
            frames: "11",
            status: "recovery",
          },
        ],
      },
      far_lp: {
        name: "Far LP (jab)",
        slug: "chunli-normals-stand-far_lp",
        damage: "4[0]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: true,
        special_cancel: true,
        super_cancel: true,
        frame_advantage: "+3",
        steps: [
          {
            img: "stfarjab15",
            frames: "2",
            status: "startup",
          },
          {
            img: "stfarjab2",
            frames: "2",
            status: "active",
          },
          {
            img: "stfarjab3",
            frames: "4",
            status: "recovery",
          },
          {
            img: "stfarjab4",
            frames: "3",
            status: "recovery",
          },
          {
            img: "stfarjab15",
            frames: "1",
            status: "recovery",
          },
        ],
      },
      far_mp: {
        name: "Far MP (strong)",
        slug: "chunli-normals-stand-far_mp",
        damage: "22[0]",
        stun: "5~11",
        stun_timer: "60",
        chain_cancel: false,
        special_cancel: true,
        super_cancel: true,
        frame_advantage: "+10",
        steps: [
          {
            img: "stfarstrng15",
            frames: "2",
            status: "startup",
          },
          {
            img: "stfarstrng24",
            frames: "2",
            status: "startup",
          },
          {
            img: "stfarstrng3",
            frames: "4",
            status: "active",
          },
          {
            img: "stfarstrng24",
            frames: "3",
            status: "recovery",
          },
          {
            img: "stfarstrng15",
            frames: "1",
            status: "recovery",
          },
        ],
      },
      far_hp: {
        name: "Far HP (fierce)",
        slug: "chunli-normals-stand-far_hp",
        damage: "24[0]",
        stun: "10~16",
        stun_timer: "80",
        chain_cancel: false,
        special_cancel: false,
        super_cancel: true,
        frame_advantage: "-2",
        steps: [
          {
            img: "stfarfrc1",
            frames: "2",
            status: "startup",
          },
          {
            img: "stfarfrc24",
            frames: "3",
            status: "startup",
          },
          {
            img: "stfarfrc3",
            frames: "6",
            status: "active",
          },
          {
            img: "stfarfrc24",
            frames: "10",
            status: "recovery",
          },
          {
            img: "stfarfrc5",
            frames: "7",
            status: "recovery",
          },
          {
            img: "stfarfrc6",
            frames: "1",
            status: "recovery",
          },
        ],
      },
    },
    crouch: {
      lp: {
        name: "LP (jab)",
        slug: "chunli-normals-crouch-lp",
        damage: "4[0]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: false,
        special_cancel: true,
        super_cancel: true,
        frame_advantage: "+4",
        steps: [
          {
            img: "crjab15",
            frames: "2",
            status: "startup",
          },
          {
            img: "crjab24",
            frames: "1",
            status: "startup",
          },
          {
            img: "crjab3",
            frames: "4",
            status: "active",
          },
          {
            img: "crjab24",
            frames: "4",
            status: "recovery",
          },
          {
            img: "crjab15",
            frames: "1",
            status: "recovery",
          },
        ],
      },
      mp: {
        name: "MP (strong)",
        slug: "chunli-normals-crouch-mp",
        damage: "18[1]",
        stun: "5~11",
        stun_timer: "60",
        chain_cancel: false,
        special_cancel: true,
        super_cancel: true,
        frame_advantage: "+9",
        steps: [
          {
            img: "crstrng15_crfrc15",
            frames: "2",
            status: "startup",
          },
          {
            img: "crstrng24",
            frames: "2",
            status: "startup",
          },
          {
            img: "crstrng3",
            frames: "4",
            status: "active",
          },
          {
            img: "crstrng24",
            frames: "4",
            status: "recovery",
          },
          {
            img: "crstrng15_crfrc15",
            frames: "1",
            status: "recovery",
          },
        ],
      },
      hp: {
        name: "HP (fierce)",
        slug: "chunli-normals-crouch-hp",
        damage: "22[2]",
        stun: "10~16",
        stun_timer: "80",
        chain_cancel: false,
        special_cancel: false,
        super_cancel: false,
        frame_advantage: "-3",
        steps: [
          {
            img: "crstrng15_crfrc15",
            frames: "3",
            status: "startup",
          },
          {
            img: "crfrc24",
            frames: "3",
            status: "startup",
          },
          {
            img: "crfrc3",
            frames: "6",
            status: "active",
          },
          {
            img: "crfrc24",
            frames: "8",
            status: "recovery",
          },
          {
            img: "crstrng15_crfrc15",
            frames: "11",
            status: "recovery",
          },
        ],
      },
    },
  },
  specials: {
    hyakuretsu_kyaku: {
      lk: {
        name: "Hyakuretsu Kyaku LK (short)",
        slug: "chunli-specials-hyakuretsu_kyaku-lk",
        damage: "28[2]",
        stun: "5~11",
        stun_timer: "100",
        super_meter: "4",
        steps: [
          {
            img: "ll112",
            frames: "1",
            status: "startup",
          },
          {
            img: "ll211",
            frames: "3",
            status: "startup",
          },
          {
            img: "ll3",
            frames: "4",
            status: "active",
          },
          {
            img: "ll4",
            frames: "4",
            status: "active",
          },
          {
            img: "ll5",
            frames: "4",
            status: "active",
          },
          {
            img: "ll610",
            frames: "4",
            status: "active",
          },
          {
            img: "ll7",
            frames: "4",
            status: "active",
          },
          {
            img: "ll8",
            frames: "4",
            status: "active",
          },
          {
            img: "ll9",
            frames: "4",
            status: "active",
          },
          {
            img: "ll610",
            frames: "4",
            status: "active",
          },
          {
            img: "ll211",
            frames: "2",
            status: "recovery",
          },
          {
            img: "ll112",
            frames: "2",
            status: "recovery",
          },
        ],
      },
      mk: {
        name: "Hyakuretsu Kyaku MK (forward)",
        slug: "chunli-specials-hyakuretsu_kyaku-mk",
        damage: "30[2]",
        stun: "5~11",
        stun_timer: "100",
        super_meter: "4",
        steps: [
          {
            img: "ll112",
            frames: "3",
            status: "startup",
          },
          {
            img: "ll211",
            frames: "4",
            status: "startup",
          },
          {
            img: "ll3",
            frames: "2",
            status: "active",
          },
          {
            img: "ll4",
            frames: "2",
            status: "active",
          },
          {
            img: "ll5",
            frames: "2",
            status: "active",
          },
          {
            img: "ll610",
            frames: "2",
            status: "active",
          },
          {
            img: "ll7",
            frames: "2",
            status: "active",
          },
          {
            img: "ll8",
            frames: "2",
            status: "active",
          },
          {
            img: "ll9",
            frames: "2",
            status: "active",
          },
          {
            img: "ll610",
            frames: "2",
            status: "active",
          },
          {
            img: "ll211",
            frames: "4",
            status: "recovery",
          },
          {
            img: "ll112",
            frames: "4",
            status: "recovery",
          },
        ],
      },
      hk: {
        name: "Hyakuretsu Kyaku HK (roundhouse)",
        slug: "chunli-specials-hyakuretsu_kyaku-hk",
        damage: "32[2]",
        stun: "5~11",
        stun_timer: "100",
        super_meter: "4",
        steps: [
          {
            img: "ll112",
            frames: "4",
            status: "startup",
          },
          {
            img: "ll211",
            frames: "6",
            status: "startup",
          },
          {
            img: "ll3",
            frames: "1",
            status: "active",
          },
          {
            img: "ll4",
            frames: "1",
            status: "active",
          },
          {
            img: "ll5",
            frames: "1",
            status: "active",
          },
          {
            img: "ll610",
            frames: "1",
            status: "active",
          },
          {
            img: "ll7",
            frames: "1",
            status: "active",
          },
          {
            img: "ll8",
            frames: "1",
            status: "active",
          },
          {
            img: "ll9",
            frames: "1",
            status: "active",
          },
          {
            img: "ll610",
            frames: "1",
            status: "active",
          },
          {
            img: "ll211",
            frames: "6",
            status: "recovery",
          },
          {
            img: "ll112",
            frames: "6",
            status: "recovery",
          },
        ],
      },
    },
    kikouken: {
      lp: {
        name: "Kikouken LP (jab)",
        slug: "chunli-specials-kikouken-lp",
        damage: "17[1]",
        stun: "7~13",
        stun_timer: "90",
        super_meter: "5",
        steps: [
          {
            img: "fb1",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb2",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb3",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb4",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb5",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb6",
            frames: "1",
            status: "active",
          },
          {
            img: "fb7jab",
            frames: "1",
            status: "active",
          },
          {
            img: "fb8jab",
            frames: "1",
            status: "active",
          },
          {
            img: "fb9jab",
            frames: "1",
            status: "active",
          },
          {
            img: "fb10jab",
            frames: "1",
            status: "active",
          },
          {
            img: "fb11jab",
            frames: "1-37",
            status: "active",
          },
          {
            img: "fbjab",
            frames: "after 75",
            status: "active",
          },
        ],
      },
      mp: {
        name: "Kikouken MP (strong)",
        slug: "chunli-specials-kikouken-mp",
        damage: "18[1]",
        stun: "7~13",
        stun_timer: "90",
        super_meter: "5",
        steps: [
          {
            img: "fb1",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb2",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb3",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb4",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb5",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb6",
            frames: "1",
            status: "active",
          },
          {
            img: "fb7strng",
            frames: "1",
            status: "active",
          },
          {
            img: "fb8strng",
            frames: "1",
            status: "active",
          },
          {
            img: "fb9strng",
            frames: "1",
            status: "active",
          },
          {
            img: "fb10strng",
            frames: "1",
            status: "active",
          },
          {
            img: "fb11strng",
            frames: "1-35",
            status: "active",
          },
          {
            img: "fbstrng",
            frames: "after 45",
            status: "active",
          },
        ],
      },
      hp: {
        name: "Kikouken HP (fierce)",
        slug: "chunli-specials-kikouken-hp",
        damage: "20[1]",
        stun: "7~13",
        stun_timer: "90",
        super_meter: "5",
        steps: [
          {
            img: "fb1",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb2",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb3",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb4",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb5",
            frames: "1",
            status: "startup",
          },
          {
            img: "fb6",
            frames: "1",
            status: "active",
          },
          {
            img: "fb7frc",
            frames: "1",
            status: "active",
          },
          {
            img: "fb8frc",
            frames: "1",
            status: "active",
          },
          {
            img: "fb9frc",
            frames: "1",
            status: "active",
          },
          {
            img: "fb10frc",
            frames: "1",
            status: "active",
          },
          {
            img: "fb11frc",
            frames: "1-33",
            status: "active",
          },
          {
            img: "fbfrc",
            frames: "after 31",
            status: "active",
          },
        ],
      },
    },
    tenshou_kyaku: {
      lk: {
        name: "Tenshou Kyaku LK (short)",
        slug: "chunli-specials-tenshou_kyaku-lk",
        damage: "12[2] *3",
        stun: "0~4 *3",
        stun_timer: "20 *3",
        super_meter: "8",
        steps: [
          {
            img: "upk1",
            frames: "6",
            status: "startup",
          },
          {
            img: "upk2",
            frames: "4",
            status: "active",
          },
          {
            img: "upk3shrt_3frwrd",
            frames: "1",
            status: "active",
          },
          {
            img: "upk4shrt_4frwrd_313rh",
            frames: "1",
            status: "active",
          },
          {
            img: "upk5shrt_5frwrd_414rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk6shrt_6frwrd_515rh",
            frames: "4",
            status: "active",
          },
          {
            img: "upk7shrt_7frwrd_616rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk8shrt_8frwrd_717rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk9shrt_914frwrd_818rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk10shrt_1015frwrd_919rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk11shrt_11frwrd_1020rh",
            frames: "4",
            status: "active",
          },
          {
            img: "upk12shrt_1217frwrd_1121rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "upk13shrt_1318frwrd_1222rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "upk14shrt_19frwrd_23rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "upk15shrt_20frwrd_24rh",
            frames: "24",
            status: "recovery",
          },
          {
            img: "upk16shrt_21frwrd_25rh",
            frames: "4",
            status: "recovery",
          },
        ],
      },
      mk: {
        name: "Tenshou Kyaku MK (forward)",
        slug: "chunli-specials-tenshou_kyaku-mk",
        damage: "12[2] *3",
        stun: "0~4 *3",
        stun_timer: "20 *3",
        super_meter: "8",
        steps: [
          {
            img: "upk1",
            frames: "4",
            status: "startup",
          },
          {
            img: "upk2",
            frames: "4",
            status: "active",
          },
          {
            img: "upk3shrt_3frwrd",
            frames: "1",
            status: "active",
          },
          {
            img: "upk4shrt_4frwrd_313rh",
            frames: "1",
            status: "active",
          },
          {
            img: "upk5shrt_5frwrd_414rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk6shrt_6frwrd_515rh",
            frames: "4",
            status: "active",
          },
          {
            img: "upk7shrt_7frwrd_616rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk8shrt_8frwrd_717rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk9shrt_914frwrd_818rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk10shrt_1015frwrd_919rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk11shrt_11frwrd_1020rh",
            frames: "4",
            status: "active",
          },
          {
            img: "upk12shrt_1217frwrd_1121rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk13shrt_1318frwrd_1222rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk9shrt_914frwrd_818rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk10shrt_1015frwrd_919rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk16frwrd",
            frames: "4",
            status: "active",
          },
          {
            img: "upk12shrt_1217frwrd_1121rh",
            frames: "2",
            status: "recovery",
          },
          {
            img: "upk13shrt_1318frwrd_1222rh",
            frames: "2",
            status: "recovery",
          },
          {
            img: "upk14shrt_19frwrd_23rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "upk15shrt_20frwrd_24rh",
            frames: "21",
            status: "recovery",
          },
          {
            img: "upk16shrt_21frwrd_25rh",
            frames: "6",
            status: "recovery",
          },
        ],
      },
      hk: {
        name: "Tenshou Kyaku HK (roundhouse)",
        slug: "chunli-specials-tenshou_kyaku-hk",
        damage: "12[2] *3",
        stun: "0~4 *3",
        stun_timer: "20 *3",
        super_meter: "8",
        steps: [
          {
            img: "upk1",
            frames: "2",
            status: "startup",
          },
          {
            img: "upk2",
            frames: "2",
            status: "active",
          },
          {
            img: "upk4shrt_4frwrd_313rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk5shrt_5frwrd_414rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk6shrt_6frwrd_515rh",
            frames: "4",
            status: "active",
          },
          {
            img: "upk7shrt_7frwrd_616rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk8shrt_8frwrd_717rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk9shrt_914frwrd_818rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk10shrt_1015frwrd_919rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk11shrt_11frwrd_1020rh",
            frames: "4",
            status: "active",
          },
          {
            img: "upk12shrt_1217frwrd_1121rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk13shrt_1318frwrd_1222rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk4shrt_4frwrd_313rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk5shrt_5frwrd_414rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk6shrt_6frwrd_515rh",
            frames: "4",
            status: "active",
          },
          {
            img: "upk7shrt_7frwrd_616rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk8shrt_8frwrd_717rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk9shrt_914frwrd_818rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk10shrt_1015frwrd_919rh",
            frames: "2",
            status: "active",
          },
          {
            img: "upk11shrt_11frwrd_1020rh",
            frames: "4",
            status: "active",
          },
          {
            img: "upk12shrt_1217frwrd_1121rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "upk13shrt_1318frwrd_1222rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "upk14shrt_19frwrd_23rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "upk15shrt_20frwrd_24rh",
            frames: "7",
            status: "recovery",
          },
          {
            img: "upk16shrt_21frwrd_25rh",
            frames: "7",
            status: "recovery",
          },
        ],
      },
    },
    spinning_bird_kick: {
      lk: {
        name: "Spinning Bird Kick LK (short)",
        slug: "chunli-specials-spinning_bird_kick-lk",
        damage: "14[1] / 12[1]",
        stun: "7~13",
        stun_timer: "90",
        steps: [
          {
            img: "sbk1",
            frames: "1",
            status: "startup",
          },
          {
            img: "sbk2",
            frames: "4",
            status: "startup",
          },
          {
            img: "sbk3",
            frames: "3",
            status: "startup",
          },
          {
            img: "sbk4",
            frames: "2",
            status: "startup",
          },
          {
            img: "sbk58",
            frames: "3",
            status: "startup",
          },
          {
            img: "sbk6",
            frames: "4",
            status: "startup",
          },
          {
            img: "sbk7",
            frames: "4",
            status: "startup",
          },
          {
            img: "sbk58",
            frames: "2",
            status: "startup",
          },
          {
            img: "sbk917shrt_917253341rh",
            frames: "4",
            status: "active",
          },
          {
            img: "sbk1018shrt_101826frwrd_1018263442rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk1119shrt_111927frwrd_1119273543rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1220shrt_122028frwrd_1220283644rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1321shrt_132129frwrd_1321293745rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1422shrt_142230frwrd_1422303846rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1523shrt_152331frwrd_15233139rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1624shrt_162432frwrd_16243240rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk917shrt_917253341rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1018shrt_101826frwrd_1018263442rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1119shrt_111927frwrd_1119273543rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1220shrt_122028frwrd_1220283644rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1321shrt_132129frwrd_1321293745rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk1422shrt_142230frwrd_1422303846rh",
            frames: "4",
            status: "active",
          },
          {
            img: "sbk1523shrt_152331frwrd_15233139rh",
            frames: "4",
            status: "active",
          },
          {
            img: "sbk1624shrt_162432frwrd_16243240rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk2527shrt_3436frwrd_4749rh",
            frames: "2",
            status: "recovery",
          },
          {
            img: "sbk26shrt",
            frames: "3",
            status: "recovery",
          },
          {
            img: "sbk2527shrt_3436frwrd_4749rh",
            frames: "2",
            status: "recovery",
          },
          {
            img: "sbk28shrt_36frwrd_50rh",
            frames: "2",
            status: "recovery",
          },
          {
            img: "sbk29shrt_37frwrd_51rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "sbk30shrt_38frwrd_52rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "sbk31shrt_39frwrd_54rh",
            frames: "6",
            status: "recovery",
          },
        ],
      },
      mk: {
        name: "Spinning Bird Kick MK (forward)",
        slug: "chunli-specials-spinning_bird_kick-mk",
        damage: "16[1] / 14[1]",
        stun: "7~13",
        stun_timer: "90",
        steps: [
          {
            img: "sbk1",
            frames: "1",
            status: "startup",
          },
          {
            img: "sbk2",
            frames: "4",
            status: "startup",
          },
          {
            img: "sbk3",
            frames: "3",
            status: "startup",
          },
          {
            img: "sbk4",
            frames: "2",
            status: "startup",
          },
          {
            img: "sbk58",
            frames: "3",
            status: "startup",
          },
          {
            img: "sbk6",
            frames: "4",
            status: "startup",
          },
          {
            img: "sbk7",
            frames: "4",
            status: "startup",
          },
          {
            img: "sbk58",
            frames: "2",
            status: "startup",
          },
          {
            img: "sbk9172533frwrd",
            frames: "4",
            status: "active",
          },
          {
            img: "sbk1018shrt_101826frwrd_1018263442rh",
            frames: "4",
            status: "active",
          },
          {
            img: "sbk1119shrt_111927frwrd_1119273543rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk1220shrt_122028frwrd_1220283644rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk1321shrt_132129frwrd_1321293745rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1422shrt_142230frwrd_1422303846rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1523shrt_152331frwrd_15233139rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1624shrt_162432frwrd_16243240rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk9172533frwrd",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1018shrt_101826frwrd_1018263442rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1119shrt_111927frwrd_1119273543rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1220shrt_122028frwrd_1220283644rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1321shrt_132129frwrd_1321293745rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1422shrt_142230frwrd_1422303846rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1523shrt_152331frwrd_15233139rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1624shrt_162432frwrd_16243240rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk9172533frwrd",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1018shrt_101826frwrd_1018263442rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1119shrt_111927frwrd_1119273543rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1220shrt_122028frwrd_1220283644rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1321shrt_132129frwrd_1321293745rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1422shrt_142230frwrd_1422303846rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk1523shrt_152331frwrd_15233139rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk1624shrt_162432frwrd_16243240rh",
            frames: "4",
            status: "active",
          },
          {
            img: "sbk9172533frwrd",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk2527shrt_3436frwrd_4749rh",
            frames: "2",
            status: "recovery",
          },
          {
            img: "sbk35frwrd_48rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "sbk2527shrt_3436frwrd_4749rh",
            frames: "2",
            status: "recovery",
          },
          {
            img: "sbk28shrt_36frwrd_50rh",
            frames: "2",
            status: "recovery",
          },
          {
            img: "sbk29shrt_37frwrd_51rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "sbk30shrt_38frwrd_52rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "sbk31shrt_39frwrd_54rh",
            frames: "6",
            status: "recovery",
          },
        ],
      },
      hk: {
        name: "Spinning Bird Kick HK (roundhouse)",
        slug: "chunli-specials-spinning_bird_kick-hk",
        damage: "18[1] / 16[1]",
        stun: "7~13",
        stun_timer: "90",
        steps: [
          {
            img: "sbk1",
            frames: "1",
            status: "startup",
          },
          {
            img: "sbk2",
            frames: "4",
            status: "startup",
          },
          {
            img: "sbk3",
            frames: "3",
            status: "startup",
          },
          {
            img: "sbk4",
            frames: "2",
            status: "startup",
          },
          {
            img: "sbk58",
            frames: "3",
            status: "startup",
          },
          {
            img: "sbk6",
            frames: "4",
            status: "startup",
          },
          {
            img: "sbk7",
            frames: "4",
            status: "startup",
          },
          {
            img: "sbk58",
            frames: "2",
            status: "startup",
          },
          {
            img: "sbk917shrt_917253341rh",
            frames: "5",
            status: "active",
          },
          {
            img: "sbk1018shrt_101826frwrd_1018263442rh",
            frames: "4",
            status: "active",
          },
          {
            img: "sbk1119shrt_111927frwrd_1119273543rh",
            frames: "4",
            status: "active",
          },
          {
            img: "sbk1220shrt_122028frwrd_1220283644rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk1321shrt_132129frwrd_1321293745rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk1422shrt_142230frwrd_1422303846rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1523shrt_152331frwrd_15233139rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1624shrt_162432frwrd_16243240rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk917shrt_917253341rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1018shrt_101826frwrd_1018263442rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1119shrt_111927frwrd_1119273543rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1220shrt_122028frwrd_1220283644rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1321shrt_132129frwrd_1321293745rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1422shrt_142230frwrd_1422303846rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1523shrt_152331frwrd_15233139rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1624shrt_162432frwrd_16243240rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk917shrt_917253341rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1018shrt_101826frwrd_1018263442rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1119shrt_111927frwrd_1119273543rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1220shrt_122028frwrd_1220283644rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1321shrt_132129frwrd_1321293745rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1422shrt_142230frwrd_1422303846rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1523shrt_152331frwrd_15233139rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1624shrt_162432frwrd_16243240rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk917shrt_917253341rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1018shrt_101826frwrd_1018263442rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1119shrt_111927frwrd_1119273543rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1220shrt_122028frwrd_1220283644rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1321shrt_132129frwrd_1321293745rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1422shrt_142230frwrd_1422303846rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1523shrt_152331frwrd_15233139rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk1624shrt_162432frwrd_16243240rh",
            frames: "1",
            status: "active",
          },
          {
            img: "sbk917shrt_917253341rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1018shrt_101826frwrd_1018263442rh",
            frames: "2",
            status: "active",
          },
          {
            img: "sbk1119shrt_111927frwrd_1119273543rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk1220shrt_122028frwrd_1220283644rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk1321shrt_132129frwrd_1321293745rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk1422shrt_142230frwrd_1422303846rh",
            frames: "3",
            status: "active",
          },
          {
            img: "sbk2527shrt_3436frwrd_4749rh",
            frames: "2",
            status: "recovery",
          },
          {
            img: "sbk35frwrd_48rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "sbk2527shrt_3436frwrd_4749rh",
            frames: "2",
            status: "recovery",
          },
          {
            img: "sbk28shrt_36frwrd_50rh",
            frames: "2",
            status: "recovery",
          },
          {
            img: "sbk29shrt_37frwrd_51rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "sbk30shrt_38frwrd_52rh",
            frames: "3",
            status: "recovery",
          },
          {
            img: "sbk53rh",
            frames: "4",
            status: "recovery",
          },
          {
            img: "sbk31shrt_39frwrd_54rh",
            frames: "6",
            status: "recovery",
          },
        ],
      },
    },
    aerial_spinning_bird_kick: {
      lk: {
        name: "Aerial Spinning Bird Kick LK (short)",
        slug: "chunli-specials-aerial_spinning_bird_kick-lk",
        damage: "12[1]",
        stun: "7~13",
        stun_timer: "90",
        steps: [
          {
            img: "asbk1",
            frames: "2",
            status: "startup",
          },
          {
            img: "asbk2",
            frames: "4",
            status: "startup",
          },
          {
            img: "asbk3",
            frames: "3",
            status: "startup",
          },
          {
            img: "asbk4",
            frames: "2",
            status: "startup",
          },
          {
            img: "asbk514",
            frames: "4",
            status: "startup",
          },
          {
            img: "asbk6",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk7",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk8",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk9",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk10",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk11",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk12",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk13",
            frames: "2",
            status: "active",
          },
          {
            img: "asbk514",
            frames: "3",
            status: "recovery",
          },
          {
            img: "asbk15",
            frames: "2",
            status: "recovery",
          },
          {
            img: "asbk16",
            frames: "3",
            status: "recovery",
          },
          {
            img: "asbk17",
            frames: "3",
            status: "recovery",
          },
          {
            img: "asbk18",
            frames: "∞",
            status: "recovery - fall",
          },
          {
            img: "asbkl13",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl2",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl13",
            frames: "2",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl4",
            frames: "2",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl5",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl6",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl7",
            frames: "4",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl8",
            frames: "5",
            status: "recovery - partial landing",
          },
          {
            img: "asbkcl13",
            frames: "2",
            status: "recovery - complete landing",
          },
          {
            img: "asbkcl2",
            frames: "5",
            status: "recovery - complete landing",
          },
          {
            img: "asbkcl13",
            frames: "3",
            status: "recovery - complete landing",
          },
        ],
      },
      mk: {
        name: "Aerial Spinning Bird Kick MK (forward)",
        slug: "chunli-specials-aerial_spinning_bird_kick-mk",
        damage: "12[1]",
        stun: "7~13",
        stun_timer: "90",
        steps: [
          {
            img: "asbk1",
            frames: "2",
            status: "startup",
          },
          {
            img: "asbk2",
            frames: "4",
            status: "startup",
          },
          {
            img: "asbk3",
            frames: "3",
            status: "startup",
          },
          {
            img: "asbk4",
            frames: "2",
            status: "startup",
          },
          {
            img: "asbk514",
            frames: "4",
            status: "startup",
          },
          {
            img: "asbk6",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk7",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk8",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk9",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk10",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk11",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk12",
            frames: "3",
            status: "active",
          },
          {
            img: "asbk13",
            frames: "2",
            status: "active",
          },
          {
            img: "asbk514",
            frames: "3",
            status: "recovery",
          },
          {
            img: "asbk15",
            frames: "2",
            status: "recovery",
          },
          {
            img: "asbk16",
            frames: "3",
            status: "recovery",
          },
          {
            img: "asbk17",
            frames: "3",
            status: "recovery",
          },
          {
            img: "asbk18",
            frames: "∞",
            status: "recovery - fall",
          },
          {
            img: "asbkl13",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl2",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl13",
            frames: "2",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl4",
            frames: "2",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl5",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl6",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl7",
            frames: "4",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl8",
            frames: "5",
            status: "recovery - partial landing",
          },
          {
            img: "asbkcl13",
            frames: "2",
            status: "recovery - complete landing",
          },
          {
            img: "asbkcl2",
            frames: "5",
            status: "recovery - complete landing",
          },
          {
            img: "asbkcl13",
            frames: "3",
            status: "recovery - complete landing",
          },
        ],
      },
      hk: {
        name: "Aerial Spinning Bird Kick HK (roundhouse)",
        slug: "chunli-specials-aerial_spinning_bird_kick-hk",
        damage: "12[1]",
        stun: "7~13",
        stun_timer: "90",
        steps: [
          {
            img: "asbk1",
            frames: "2",
            status: "startup",
          },
          {
            img: "asbk2",
            frames: "4",
            status: "startup",
          },
          {
            img: "asbk3",
            frames: "3",
            status: "startup",
          },
          {
            img: "asbk4",
            frames: "2",
            status: "startup",
          },
          {
            img: "asbk514",
            frames: "4",
            status: "startup",
          },
          {
            img: "asbk6",
            frames: "2",
            status: "active",
          },
          {
            img: "asbk7",
            frames: "2",
            status: "active",
          },
          {
            img: "asbk8",
            frames: "2",
            status: "active",
          },
          {
            img: "asbk9",
            frames: "2",
            status: "active",
          },
          {
            img: "asbk10",
            frames: "2",
            status: "active",
          },
          {
            img: "asbk11",
            frames: "2",
            status: "active",
          },
          {
            img: "asbk12",
            frames: "2",
            status: "active",
          },
          {
            img: "asbk13",
            frames: "2",
            status: "active",
          },
          {
            img: "asbk514",
            frames: "3",
            status: "recovery",
          },
          {
            img: "asbk15",
            frames: "2",
            status: "recovery",
          },
          {
            img: "asbk16",
            frames: "3",
            status: "recovery",
          },
          {
            img: "asbk17",
            frames: "3",
            status: "recovery",
          },
          {
            img: "asbk18",
            frames: "∞",
            status: "recovery - fall",
          },
          {
            img: "asbkl13",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl2",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl13",
            frames: "2",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl4",
            frames: "2",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl5",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl6",
            frames: "3",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl7",
            frames: "4",
            status: "recovery - partial landing",
          },
          {
            img: "asbkl8",
            frames: "5",
            status: "recovery - partial landing",
          },
          {
            img: "asbkcl13",
            frames: "2",
            status: "recovery - complete landing",
          },
          {
            img: "asbkcl2",
            frames: "5",
            status: "recovery - complete landing",
          },
          {
            img: "asbkcl13",
            frames: "3",
            status: "recovery - complete landing",
          },
        ],
      },
    },
  },
};
