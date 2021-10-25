const movements = {
  //  stand_movements: {
  //     neutral: {
  //       name: "Stand neutral",
  //       slug: "chunli-movements-stand-neutral",
  //       steps: {startup:[],
  //     },
  //     backward: {
  //       name: "Stand backward",
  //       slug: "chunli-movements-stand-backward",
  //       steps: {startup:[],
  //     },
  //     forward: {
  //       name: "Stand forward",
  //       slug: "chunli-movements-stand-forward",
  //       steps: {startup:[],
  //     },
  //   },
  //   crouch_normals: {
  //     neutral: {
  //       name: "Crouch",
  //       slug: "chunli-movements-crouch-neutral",
  //       steps: {startup:[],
  //     },
  //   },
  jump_movements: {
    wall_jump: {
      name: "Wall jump",
      slug: "chunli-movements-jump_movements-wall_jump",
      steps: {
        active: [
          {
            img: "wj",
            frames: "6",
          },
        ],
      },
    },
    //     neutral: {
    //       name: "Jump neutral",
    //       slug: "chunli-movements-jump_movements-neutral",
    //       steps: {startup:[],
    //     },
    //     diagonal: {
    //       name: "Jump diagonal",
    //       slug: "chunli-movements-jump_movements-diagonal",
    //       steps: {startup:[],
    //     },
  },
};

const normals = {
  stand_normals: {
    close_lp: {
      name: "Close LP (jab)",
      slug: "chunli-normals-stand_normals-close_lp",
      data: {
        damage: "18[0]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: "Yes",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "+5",
      },
      steps: {
        startup: [
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
        ],
        active: [
          {
            img: "stcljab3",
            frames: "4",
            status: "active",
          },
        ],
        recovery: [
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
    },
    close_mp: {
      name: "Close MP (strong)",
      slug: "chunli-normals-stand_normals-close_mp",
      data: {
        damage: "22[1]",
        stun: "5~11",
        stun_timer: "60",
        chain_cancel: "No",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "+10",
      },
      steps: {
        startup: [
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
        ],
        active: [
          {
            img: "stclstrng3",
            frames: "4",
            status: "active",
          },
        ],
        recovery: [
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
    },
    close_hp: {
      name: "Close HP (fierce)",
      slug: "chunli-normals-stand_normals-close_hp",
      data: {
        damage: "24[1]",
        stun: "10~16",
        stun_timer: "80",
        chain_cancel: "No",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "-9",
      },
      steps: {
        startup: [
          {
            img: "stclfrc13",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "stclfrc2",
            frames: "20",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "stclfrc13",
            frames: "11",
            status: "recovery",
          },
        ],
      },
    },
    far_lp: {
      name: "Far LP (jab)",
      slug: "chunli-normals-stand_normals-far_lp",
      data: {
        damage: "4[0]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: "Yes",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "+3",
      },
      steps: {
        startup: [
          {
            img: "stfarjab15",
            frames: "2",
            status: "startup",
          },
        ],
        active: [
          {
            img: "stfarjab2",
            frames: "2",
            status: "active",
          },
        ],
        recovery: [
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
    },
    far_mp: {
      name: "Far MP (strong)",
      slug: "chunli-normals-stand_normals-far_mp",
      data: {
        damage: "22[0]",
        stun: "5~11",
        stun_timer: "60",
        chain_cancel: "No",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "+10",
      },
      steps: {
        startup: [
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
        ],
        active: [
          {
            img: "stfarstrng3",
            frames: "4",
            status: "active",
          },
        ],
        recovery: [
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
    },
    far_hp: {
      name: "Far HP (fierce)",
      slug: "chunli-normals-stand_normals-far_hp",
      data: {
        damage: "24[0]",
        stun: "10~16",
        stun_timer: "80",
        chain_cancel: "No",
        special_cancel: "No",
        super_cancel: "Yes",
        frame_advantage: "-2",
      },
      steps: {
        startup: [
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
        ],
        active: [
          {
            img: "stfarfrc3",
            frames: "6",
            status: "active",
          },
        ],
        recovery: [
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
    close_lk: {
      name: "Close LK (short)",
      slug: "chunli-normals-stand_normals-close_lk",
      data: {
        damage: "20[1]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: "No",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "+3",
      },
      steps: {
        startup: [
          {
            img: "stclshrt15_stclfrwrd17",
            frames: "2",
            status: "startup",
          },
          {
            img: "stclshrt24",
            frames: "1",
            status: "startup",
          },
        ],
        active: [
          {
            img: "stclshrt3",
            frames: "5",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "stclshrt24",
            frames: "4",
            status: "recovery",
          },
          {
            img: "stclshrt15_stclfrwrd17",
            frames: "1",
            status: "recovery",
          },
        ],
      },
    },
    close_mk: {
      name: "Close MK (forward)",
      slug: "chunli-normals-stand_normals-close_mk",
      data: {
        damage: "24[1]",
        stun: "5~11",
        stun_timer: "60",
        chain_cancel: "No",
        special_cancel: "Yes / No",
        super_cancel: "Yes / No",
        frame_advantage: "+1 / +4",
      },
      steps: {
        startup: [
          {
            img: "stclshrt15_stclfrwrd17",
            frames: "2",
            status: "startup",
          },
          {
            img: "stclfrwrd26",
            frames: "1",
            status: "startup",
          },
        ],
        active: [
          {
            img: "stclfrwrd3",
            frames: "3",
            status: "active",
          },
          {
            img: "stclfrwrd4",
            frames: "6",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "stclfrwrd5",
            frames: "3",
            status: "recovery",
          },
          {
            img: "stclfrwrd26",
            frames: "4",
            status: "recovery",
          },
          {
            img: "stclshrt15_stclfrwrd17",
            frames: "1",
            status: "recovery",
          },
        ],
      },
    },
    close_hk: {
      name: "Close HK (roundhouse)",
      slug: "chunli-normals-stand_normals-close_hk",
      data: {
        damage: "28[1]",
        stun: "10~16",
        stun_timer: "80",
        chain_cancel: "No",
        special_cancel: "No",
        super_cancel: "No",
        frame_advantage: "-5",
      },
      steps: {
        startup: [
          {
            img: "stclrh1",
            frames: "1",
            status: "startup",
          },
          {
            img: "stclrh2",
            frames: "1",
            status: "startup",
          },
          {
            img: "stclrh3",
            frames: "6",
            status: "startup",
          },
          {
            img: "stclrh4",
            frames: "1",
            status: "startup",
          },
        ],
        active: [
          {
            img: "stclrh5",
            frames: "6",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "stclrh6",
            frames: "4",
            status: "recovery",
          },
          {
            img: "stclrh7",
            frames: "6",
            status: "recovery",
          },
          {
            img: "stclrh8",
            frames: "4",
            status: "recovery",
          },
          {
            img: "stclrh9",
            frames: "7",
            status: "recovery",
          },
        ],
      },
    },
    far_lk: {
      name: "Far LK (short)",
      slug: "chunli-normals-stand_normals-far_lk",
      data: {
        damage: "20[0]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: "No",
        special_cancel: "No",
        super_cancel: "No",
        frame_advantage: "+3",
      },
      steps: {
        startup: [
          {
            img: "stfarshrt15_stfarfrwrd15",
            frames: "3",
            status: "startup",
          },
          {
            img: "stfarshrt24",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "stfarshrt3",
            frames: "5",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "stfarshrt24",
            frames: "4",
            status: "recovery",
          },
          {
            img: "stfarshrt15_stfarfrwrd15",
            frames: "1",
            status: "recovery",
          },
        ],
      },
    },
    far_mk: {
      name: "Far MK (forward)",
      slug: "chunli-normals-stand_normals-far_mk",
      data: {
        damage: "24[0]",
        stun: "5~11",
        stun_timer: "60",
        chain_cancel: "No",
        special_cancel: "No",
        super_cancel: "No",
        frame_advantage: "+5",
      },
      steps: {
        startup: [
          {
            img: "stfarshrt15_stfarfrwrd15",
            frames: "3",
            status: "startup",
          },
          {
            img: "stfarfrwrd24",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "stfarfrwrd3",
            frames: "5",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "stfarfrwrd24",
            frames: "4",
            status: "recovery",
          },
          {
            img: "stfarshrt15_stfarfrwrd15",
            frames: "4",
            status: "recovery",
          },
        ],
      },
    },
    far_hk: {
      name: "Far HK (roundhouse)",
      slug: "chunli-normals-stand_normals-far_hk",
      data: {
        damage: "28[0]",
        stun: "10~16",
        stun_timer: "80",
        chain_cancel: "No",
        special_cancel: "No",
        super_cancel: "No",
        frame_advantage: "0",
      },
      steps: {
        startup: [
          {
            img: "stfarrh1",
            frames: "3",
            status: "startup",
          },
          {
            img: "stfarrh2",
            frames: "3",
            status: "startup",
          },
          {
            img: "stfarrh3",
            frames: "4",
            status: "startup",
          },
        ],
        active: [
          {
            img: "stfarrh4",
            frames: "8",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "stfarrh5",
            frames: "7",
            status: "recovery",
          },
          {
            img: "stfarrh6",
            frames: "7",
            status: "recovery",
          },
        ],
      },
    },
  },
  crouch_normals: {
    lp: {
      name: "Crouch LP (jab)",
      slug: "chunli-normals-crouch_normals-lp",
      data: {
        damage: "4[0]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: "No",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "+4",
      },
      steps: {
        startup: [
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
        ],
        active: [
          {
            img: "crjab3",
            frames: "4",
            status: "active",
          },
        ],
        recovery: [
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
    },
    mp: {
      name: "Crouch MP (strong)",
      slug: "chunli-normals-crouch_normals-mp",
      data: {
        damage: "18[1]",
        stun: "5~11",
        stun_timer: "60",
        chain_cancel: "No",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "+9",
      },
      steps: {
        startup: [
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
        ],
        active: [
          {
            img: "crstrng3",
            frames: "4",
            status: "active",
          },
        ],
        recovery: [
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
    },
    hp: {
      name: "Crouch HP (fierce)",
      slug: "chunli-normals-crouch_normals-hp",
      data: {
        damage: "22[2]",
        stun: "10~16",
        stun_timer: "80",
        chain_cancel: "No",
        special_cancel: "No",
        super_cancel: "No",
        frame_advantage: "-3",
      },
      steps: {
        startup: [
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
        ],
        active: [
          {
            img: "crfrc3",
            frames: "6",
            status: "active",
          },
        ],
        recovery: [
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
    lk: {
      name: "Crouch LK (short)",
      slug: "chunli-normals-crouch_normals-lk",
      data: {
        damage: "14[0]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: "No",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "+4",
      },
      steps: {
        startup: [
          {
            img: "crshrt15",
            frames: "3",
            status: "startup",
          },
          {
            img: "crshrt24",
            frames: "1",
            status: "startup",
          },
        ],
        active: [
          {
            img: "crshrt3",
            frames: "4",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "crshrt24",
            frames: "4",
            status: "recovery",
          },
          {
            img: "crshrt15",
            frames: "1",
            status: "recovery",
          },
        ],
      },
    },
    mk: {
      name: "Crouch MK (forward)",
      slug: "chunli-normals-crouch_normals-mk",
      data: {
        damage: "18[1]",
        stun: "5~11",
        stun_timer: "60",
        chain_cancel: "No",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "+9",
      },
      steps: {
        startup: [
          {
            img: "crfrwrd1",
            frames: "4",
            status: "startup",
          },
        ],
        active: [
          {
            img: "crfrwrd2",
            frames: "5",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "crfrwrd3",
            frames: "4",
            status: "recovery",
          },
        ],
      },
    },
    hk: {
      name: "Crouch HK (roundhouse)",
      slug: "chunli-normals-crouch_normals-hk",
      data: {
        damage: "22[2]",
        stun: "5~11",
        stun_timer: "130",
        chain_cancel: "No",
        special_cancel: "No",
        super_cancel: "No",
        frame_advantage: "-3",
      },
      steps: {
        startup: [
          {
            img: "crrh15",
            frames: "3",
            status: "startup",
          },
          {
            img: "crrh24",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "crrh3",
            frames: "6",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "crrh24",
            frames: "8",
            status: "recovery",
          },
          {
            img: "crrh15",
            frames: "11",
            status: "recovery",
          },
        ],
      },
    },
  },
  jump_normals: {
    neutral_lp: {
      name: "Neutral Jump LP (jab)",
      slug: "chunli-normals-jump_normals-neutral_lp",
      data: {
        damage: "18[2]",
        stun: "1~7(2)",
        stun_timer: "40",
        special_cancel: "No",
      },
      steps: {
        startup: [
          {
            img: "njjab1_njstrng17_njfrc17",
            frames: "3",
            status: "startup",
          },
          {
            img: "njjab2_njstrng26_njfrc26",
            frames: "3",
            status: "startup",
          },
          {
            img: "njjab3_njstrng35_njfrc35",
            frames: "2",
            status: "startup",
          },
        ],
        active: [
          {
            img: "njjab4",
            frames: "∞",
            status: "active",
          },
        ],
      },
    },
    neutral_mp: {
      name: "Neutral Jump MP (strong)",
      slug: "chunli-normals-jump_normals-neutral_mp",
      data: {
        damage: "22[2]",
        stun: "5~11(2)",
        stun_timer: "50(+10)",
        special_cancel: "No",
      },
      steps: {
        startup: [
          {
            img: "njjab1_njstrng17_njfrc17",
            frames: "3",
            status: "startup",
          },
          {
            img: "njjab2_njstrng26_njfrc26",
            frames: "3",
            status: "startup",
          },
          {
            img: "njjab3_njstrng35_njfrc35",
            frames: "2",
            status: "startup",
          },
        ],
        active: [
          {
            img: "njstrng4",
            frames: "16",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "njjab3_njstrng35_njfrc35",
            frames: "2",
            status: "recovery",
          },
          {
            img: "njjab2_njstrng26_njfrc26",
            frames: "3",
            status: "recovery",
          },
          {
            img: "njjab1_njstrng17_njfrc17",
            frames: "4",
            status: "recovery",
          },
          {
            img: "njstrng8_njfrc8_djstrng6_djfrc6",
            frames: "∞",
            status: "recovery",
          },
        ],
      },
    },
    neutral_hp: {
      name: "Neutral Jump HP (fierce)",
      slug: "chunli-normals-jump_normals-neutral_hp",
      data: {
        damage: "26[2]",
        stun: "11~17(-1)",
        stun_timer: "60(+20)",
        special_cancel: "No",
      },
      steps: {
        startup: [
          {
            img: "njjab1_njstrng17_njfrc17",
            frames: "3",
            status: "startup",
          },
          {
            img: "njjab2_njstrng26_njfrc26",
            frames: "3",
            status: "startup",
          },
          {
            img: "njjab3_njstrng35_njfrc35",
            frames: "2",
            status: "startup",
          },
        ],
        active: [
          {
            img: "njfrc4",
            frames: "8",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "njjab3_njstrng35_njfrc35",
            frames: "2",
            status: "recovery",
          },
          {
            img: "njjab2_njstrng26_njfrc26",
            frames: "3",
            status: "recovery",
          },
          {
            img: "njjab1_njstrng17_njfrc17",
            frames: "4",
            status: "recovery",
          },
          {
            img: "njstrng8_njfrc8_djstrng6_djfrc6",
            frames: "∞",
            status: "recovery",
          },
        ],
      },
    },
    diagonal_lp: {
      name: "Diagonal Jump LP (jab)",
      slug: "chunli-normals-jump_normals-diagonal_lp",
      data: {
        damage: "16[2]",
        stun: "1~7(2)",
        stun_timer: "40",
        special_cancel: "No",
      },
      steps: {
        startup: [
          {
            img: "djjab1_djstrng15_djfrc15",
            frames: "3",
            status: "startup",
          },
          {
            img: "djjab2_djstrng24_djfrc24",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "djjab3",
            frames: "∞",
            status: "active",
          },
        ],
      },
    },
    diagonal_mp: {
      name: "Diagonal Jump MP (strong)",
      slug: "chunli-normals-jump_normals-diagonal_mp",
      data: {
        damage: "20[2]",
        stun: "5~11",
        stun_timer: "50(+10)",
        special_cancel: "No",
      },
      steps: {
        startup: [
          {
            img: "djjab1_djstrng15_djfrc15",
            frames: "3",
            status: "startup",
          },
          {
            img: "djjab2_djstrng24_djfrc24",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "djstrng3",
            frames: "8",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "djjab2_djstrng24_djfrc24",
            frames: "3",
            status: "recovery",
          },
          {
            img: "djjab1_djstrng15_djfrc15",
            frames: "4",
            status: "recovery",
          },
          {
            img: "njstrng8_njfrc8_djstrng6_djfrc6",
            frames: "∞",
            status: "recovery",
          },
        ],
      },
    },
    diagonal_hp: {
      name: "Diagonal Jump HP (fierce)",
      slug: "chunli-normals-jump_normals-diagonal_hp",
      data: {
        damage: "24[2]",
        stun: "11~17(-1)",
        stun_timer: "60(+20)",
        special_cancel: "No",
      },
      steps: {
        startup: [
          {
            img: "djjab1_djstrng15_djfrc15",
            frames: "3",
            status: "startup",
          },
          {
            img: "djjab2_djstrng24_djfrc24",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "djfrc3",
            frames: "8",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "djjab2_djstrng24_djfrc24",
            frames: "3",
            status: "recovery",
          },
          {
            img: "djjab1_djstrng15_djfrc15",
            frames: "4",
            status: "recovery",
          },
          {
            img: "njstrng8_njfrc8_djstrng6_djfrc6",
            frames: "∞",
            status: "recovery",
          },
        ],
      },
    },
    neutral_lk: {
      name: "Neutral Jump LK (short)",
      slug: "chunli-normals-jump_normals-neutral_lk",
      data: {
        damage: "18[2]",
        stun: "1~7(2)",
        stun_timer: "40",
        special_cancel: "No",
      },
      steps: {
        startup: [
          {
            img: "njshrt1_njfrwrd15_djrh1",
            frames: "3",
            status: "startup",
          },
          {
            img: "njshrt2_njfrwrd24_djrh2",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "njshrt3",
            frames: "∞",
            status: "active",
          },
        ],
      },
    },
    neutral_mk: {
      name: "Neutral Jump MK (forward)",
      slug: "chunli-normals-jump_normals-neutral_mk",
      data: {
        damage: "22[2]",
        stun: "5~11",
        stun_timer: "50(+10)",
        special_cancel: "No",
      },
      steps: {
        startup: [
          {
            img: "njshrt1_njfrwrd15_djrh1",
            frames: "3",
            status: "startup",
          },
          {
            img: "njshrt2_njfrwrd24_djrh2",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "njfrwrd3",
            frames: "10",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "njshrt2_njfrwrd24_djrh2",
            frames: "3",
            status: "recovery",
          },
          {
            img: "njshrt1_njfrwrd15_djrh1",
            frames: "∞",
            status: "recovery",
          },
        ],
      },
    },
    neutral_hk: {
      name: "Neutral Jump HK (roundhouse)",
      slug: "chunli-normals-jump_normals-neutral_hk",
      data: {
        damage: "26[2]",
        stun: "10~16",
        stun_timer: "80",
        special_cancel: "Yes",
      },
      steps: {
        startup: [
          {
            img: "njrh1",
            frames: "3",
            status: "startup",
          },
          {
            img: "njrh2",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "njrh3",
            frames: "10",
            status: "active",
          },
          {
            img: "njrh4",
            frames: "10",
            status: "active",
          },
          {
            img: "njrh5",
            frames: "10",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "njrh6",
            frames: "3",
            status: "recovery",
          },
          {
            img: "njrh7",
            frames: "3",
            status: "recovery",
          },
          {
            img: "njrh8",
            frames: "∞",
            status: "recovery",
          },
        ],
      },
    },
    diagonal_lk: {
      name: "Diagonal Jump LK (short)",
      slug: "chunli-normals-jump_normals-diagonal_lk",
      data: {
        damage: "20[2]",
        stun: "1~7(2)",
        stun_timer: "40",
        special_cancel: "No",
      },
      steps: {
        startup: [
          {
            img: "djshrt1_djfrwrd15",
            frames: "3",
            status: "startup",
          },
          {
            img: "djshrt2_djfrwrd24",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "djshrt3",
            frames: "∞",
            status: "active",
          },
        ],
      },
    },
    diagonal_mk: {
      name: "Diagonal Jump MK (forward)",
      slug: "chunli-normals-jump_normals-diagonal_mk",
      data: {
        damage: "20[2]",
        stun: "5~11",
        stun_timer: "50(+10)",
        special_cancel: "No",
      },
      steps: {
        startup: [
          {
            img: "djshrt1_djfrwrd15",
            frames: "3",
            status: "startup",
          },
          {
            img: "djshrt2_djfrwrd24",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "djfrwrd3",
            frames: "16",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "djshrt2_djfrwrd24",
            frames: "3",
            status: "recovery",
          },
          {
            img: "djshrt1_djfrwrd15",
            frames: "∞",
            status: "recovery",
          },
        ],
      },
    },
    diagonal_hk: {
      name: "Diagonal Jump HK (roundhouse)",
      slug: "chunli-normals-jump_normals-diagonal_hk",
      data: {
        damage: "24[2]",
        stun: "11~17(-1)",
        stun_timer: "60(+20)",
        special_cancel: "No",
      },
      steps: {
        startup: [
          {
            img: "njshrt1_njfrwrd15_djrh1",
            frames: "3",
            status: "startup",
          },
          {
            img: "njshrt2_njfrwrd24_djrh2",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "djrh3",
            frames: "6",
            status: "active",
          },
          {
            img: "djrh4",
            frames: "4",
            status: "active",
          },
          {
            img: "djrh5",
            frames: "6",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "djrh6",
            frames: "6",
            status: "recovery",
          },
          {
            img: "djrh7",
            frames: "∞",
            status: "recovery",
          },
        ],
      },
    },
  },
  command_normals: {
    flip_kick: {
      name: "Flip Kick",
      slug: "chunli-normals-command_normals-flip_kick",
      data: {
        damage: "22[0]",
        stun: "0~5",
        stun_timer: "40",
      },
      steps: {
        startup: [
          {
            img: "fk1",
            frames: "3",
            status: "startup",
          },
          {
            img: "fk2",
            frames: "3",
            status: "startup",
          },
        ],
        active: [
          {
            img: "fk3",
            frames: "5",
            status: "active",
          },
          {
            img: "fk4",
            frames: "4",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "fk5",
            frames: "4",
            status: "recovery",
          },
          {
            img: "fk6",
            frames: "4",
            status: "recovery",
          },
          {
            img: "fk7",
            frames: "6",
            status: "recovery",
          },
          {
            img: "fk8",
            frames: "29",
            status: "recovery",
          },
        ],
      },
    },
    neck_breaker: {
      name: "Neck Breaker",
      slug: "chunli-normals-command_normals-neck_breaker",
      data: {
        damage: "20[0]",
        stun: "10~16",
        stun_timer: "80",
      },
      steps: {
        startup: [
          {
            img: "nb1",
            frames: "4",
            status: "startup",
          },
          {
            img: "nb2",
            frames: "4",
            status: "startup",
          },
          {
            img: "nb3",
            frames: "5",
            status: "startup",
          },
          {
            img: "nb4",
            frames: "6",
            status: "startup",
          },
          {
            img: "nb5",
            frames: "7",
            status: "startup",
          },
          {
            img: "nb6",
            frames: "8",
            status: "startup",
          },
          {
            img: "nb7",
            frames: "2",
            status: "startup",
          },
        ],
        active: [
          {
            img: "nb8",
            frames: "14",
            status: "active",
          },
        ],
      },
    },
    head_stomp: {
      name: "Head Stomp",
      slug: "chunli-normals-command_normals-head_stomp",
      data: {
        damage: "20[0]",
        stun: "2~8",
        stun_timer: "60",
      },
      steps: {
        startup: [
          {
            img: "hs14",
            frames: "1",
            status: "startup",
          },
          {
            img: "hs25",
            frames: "2",
            status: "startup",
          },
        ],
        active: [
          {
            img: "hs3",
            frames: "16",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "hs14",
            frames: "8",
            status: "recovery",
          },
          {
            img: "hs25",
            frames: "4",
            status: "recovery",
          },
          {
            img: "hs6",
            frames: "5",
            status: "recovery",
          },
          {
            img: "hs7",
            frames: "∞",
            status: "recovery",
          },
        ],
      },
    },
  },
};

const specials = {
  hyakuretsu_kyaku: {
    lk: {
      name: "Hyakuretsu Kyaku LK (short)",
      slug: "chunli-specials-hyakuretsu_kyaku-lk",
      data: {
        damage: "28[2]",
        stun: "5~11",
        stun_timer: "100",
        super_meter: "4",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
        ],
        recovery: [
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
    },
    mk: {
      name: "Hyakuretsu Kyaku MK (forward)",
      slug: "chunli-specials-hyakuretsu_kyaku-mk",
      data: {
        damage: "30[2]",
        stun: "5~11",
        stun_timer: "100",
        super_meter: "4",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
        ],
        recovery: [
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
    },
    hk: {
      name: "Hyakuretsu Kyaku HK (roundhouse)",
      slug: "chunli-specials-hyakuretsu_kyaku-hk",
      data: {
        damage: "32[2]",
        stun: "5~11",
        stun_timer: "100",
        super_meter: "4",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
        ],
        recovery: [
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
  },
  kikouken: {
    lp: {
      name: "Kikouken LP (jab)",
      slug: "chunli-specials-kikouken-lp",
      data: {
        damage: "17[1]",
        stun: "7~13",
        stun_timer: "90",
        super_meter: "5",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
    },
    mp: {
      name: "Kikouken MP (strong)",
      slug: "chunli-specials-kikouken-mp",
      data: {
        damage: "18[1]",
        stun: "7~13",
        stun_timer: "90",
        super_meter: "5",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
    },
    hp: {
      name: "Kikouken HP (fierce)",
      slug: "chunli-specials-kikouken-hp",
      data: {
        damage: "20[1]",
        stun: "7~13",
        stun_timer: "90",
        super_meter: "5",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
  },
  tenshou_kyaku: {
    lk: {
      name: "Tenshou Kyaku LK (short)",
      slug: "chunli-specials-tenshou_kyaku-lk",
      data: {
        damage: "12[2]*3",
        stun: "0~4*3",
        stun_timer: "20*3",
        super_meter: "8",
      },
      steps: {
        startup: [
          {
            img: "upk1",
            frames: "6",
            status: "startup",
          },
        ],
        active: [
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
        ],
        recovery: [
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
    },
    mk: {
      name: "Tenshou Kyaku MK (forward)",
      slug: "chunli-specials-tenshou_kyaku-mk",
      data: {
        damage: "12[2]*3",
        stun: "0~4*3",
        stun_timer: "20*3",
        super_meter: "8",
      },
      steps: {
        startup: [
          {
            img: "upk1",
            frames: "4",
            status: "startup",
          },
        ],
        active: [
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
        ],
        recovery: [
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
    },
    hk: {
      name: "Tenshou Kyaku HK (roundhouse)",
      slug: "chunli-specials-tenshou_kyaku-hk",
      data: {
        damage: "12[2]*3",
        stun: "0~4*3",
        stun_timer: "20*3",
        super_meter: "8",
      },
      steps: {
        startup: [
          {
            img: "upk1",
            frames: "2",
            status: "startup",
          },
        ],
        active: [
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
        ],
        recovery: [
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
  },
  spinning_bird_kick: {
    lk: {
      name: "Spinning Bird Kick LK (short)",
      slug: "chunli-specials-spinning_bird_kick-lk",
      data: {
        damage: "14[1] / 12[1]",
        stun: "7~13",
        stun_timer: "90",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
        ],
        recovery: [
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
    },
    mk: {
      name: "Spinning Bird Kick MK (forward)",
      slug: "chunli-specials-spinning_bird_kick-mk",
      data: {
        damage: "16[1] / 14[1]",
        stun: "7~13",
        stun_timer: "90",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
        ],
        recovery: [
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
    },
    hk: {
      name: "Spinning Bird Kick HK (roundhouse)",
      slug: "chunli-specials-spinning_bird_kick-hk",
      data: {
        damage: "18[1] / 16[1]",
        stun: "7~13",
        stun_timer: "90",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
        ],
        recovery: [
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
  },
  aerial_spinning_bird_kick: {
    lk: {
      name: "Aerial Spinning Bird Kick LK (short)",
      slug: "chunli-specials-aerial_spinning_bird_kick-lk",
      data: {
        damage: "12[1]",
        stun: "7~13",
        stun_timer: "90",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
        ],
        recovery: [
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
    mk: {
      name: "Aerial Spinning Bird Kick MK (forward)",
      slug: "chunli-specials-aerial_spinning_bird_kick-mk",
      data: {
        damage: "12[1]",
        stun: "7~13",
        stun_timer: "90",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
        ],
        recovery: [
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
    hk: {
      name: "Aerial Spinning Bird Kick HK (roundhouse)",
      slug: "chunli-specials-aerial_spinning_bird_kick-hk",
      data: {
        damage: "12[1]",
        stun: "7~13",
        stun_timer: "90",
      },
      steps: {
        startup: [
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
        ],
        active: [
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
        ],
        recovery: [
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
  super: {
    senretsu_kyaku: {
      name: "Senretsu Kyaku",
      slug: "chunli-specials-super-senretsu_kyaku",
      data: {
        damage: "16[0]*6",
        stun: "0~4*6",
        stun_timer: "20*6",
        frame_advantage: "+9",
      },
      steps: {
        startup: [
          {
            img: "super1",
            frames: "1+[18]+1",
            status: "startup",
          },
          {
            img: "super2",
            frames: "2",
            status: "startup",
          },
          {
            img: "super3",
            frames: "2",
            status: "startup",
          },
          {
            img: "super4",
            frames: "2",
            status: "startup",
          },
          {
            img: "super5",
            frames: "2",
            status: "startup",
          },
        ],
        active: [
          {
            img: "super6",
            frames: "4",
            status: "active",
          },
          {
            img: "super7",
            frames: "1",
            status: "active",
          },
          {
            img: "super8",
            frames: "2",
            status: "active",
          },
          {
            img: "super9",
            frames: "2",
            status: "active",
          },
          {
            img: "super10",
            frames: "2",
            status: "active",
          },
          {
            img: "super1113",
            frames: "2",
            status: "active",
          },
          {
            img: "super12",
            frames: "6",
            status: "active",
          },
          {
            img: "super1113",
            frames: "3",
            status: "active",
          },
          {
            img: "super14",
            frames: "3",
            status: "active",
          },
          {
            img: "super15",
            frames: "1",
            status: "active",
          },
          {
            img: "super16",
            frames: "1",
            status: "active",
          },
          {
            img: "super17",
            frames: "1",
            status: "active",
          },
          {
            img: "super1822",
            frames: "1",
            status: "active",
          },
          {
            img: "super19",
            frames: "1",
            status: "active",
          },
          {
            img: "super20",
            frames: "1",
            status: "active",
          },
          {
            img: "super21",
            frames: "1",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "super1822",
            frames: "1",
            status: "recovery",
          },
          {
            img: "super23",
            frames: "6",
            status: "recovery",
          },
          {
            img: "super24",
            frames: "7",
            status: "recovery",
          },
        ],
      },
    },
  },
};

export const data = {
  movements: movements,
  normals: normals,
  specials: specials,
};
