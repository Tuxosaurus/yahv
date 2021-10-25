const normals = {
  stand_normals: {
    close_lp: {
      name: "Close LP (jab)",
      slug: "ryu-normals-stand_normals-close_lp",
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
            img: "stcljab13_stclstrng17_stfarstrng1_stfarfrc1_stclshrt16",
            frames: "2",
            status: "startup",
          },
        ],
        active: [
          {
            img: "stcljab2",
            frames: "4",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "stcljab13_stclstrng17_stfarstrng1_stfarfrc1_stclshrt16",
            frames: "5",
            status: "recovery",
          },
        ],
      },
    },
    far_lp: {
      name: "Far LP (jab)",
      slug: "ryu-normals-stand_normals-far_lp",
      data: {
        damage: "4[0]",
        stun: "0~5",
        stun_timer: "40",
        chain_cancel: "Yes",
        special_cancel: "Yes",
        super_cancel: "Yes",
        frame_advantage: "+4",
      },
      steps: {
        startup: [
          {
            img: "stfarjab13",
            frames: "2",
            status: "startup",
          },
        ],
        active: [
          {
            img: "stfarjab2",
            frames: "4",
            status: "active",
          },
        ],
        recovery: [
          {
            img: "stfarjab13",
            frames: "4",
            status: "recovery",
          },
          {
            img: "stfarjab4_stfarstrng6_stfarfrc6",
            frames: "1",
            status: "recovery",
          },
        ],
      },
    },
  },
};

const specials = {
  hadouken: {
    lp: {
      name: "Hadouken LP (jab)",
      slug: "ryu-specials-hadouken-lp",
      data: {
        damage: "18[0]",
        stun: "7~13",
        stun_timer: "110",
        super_meter: "2",
      },
      steps: {
        startup: [
          {
            img: "fb1",
            frames: "2",
            status: "startup",
          },
          {
            img: "fb2",
            frames: "6",
            status: "startup",
          },
          {
            img: "fb3",
            frames: "2",
            status: "startup",
          },
          {
            img: "fb4",
            frames: "1",
            status: "startup",
          },
        ],
        active: [
          {
            img: "fb5",
            frames: "1",
            status: "active",
          },
          {
            img: "fb7bjab",
            frames: "2",
            status: "active",
          },
          {
            img: "fb10bjab",
            frames: "3",
            status: "active",
          },
          {
            img: "fb13bjab",
            frames: "3",
            status: "active",
          },
          {
            img: "fb14bjab",
            frames: "29",
            status: "active",
          },
        ],
      },
    },
    mp: {
      name: "Hadouken MP (strong)",
      slug: "ryu-specials-hadouken-mp",
      data: {
        damage: "20[0]",
        stun: "7~13",
        stun_timer: "90",
        super_meter: "5",
      },
      steps: {
        startup: [
          {
            img: "fb1",
            frames: "2",
            status: "startup",
          },
          {
            img: "fb2",
            frames: "6",
            status: "startup",
          },
          {
            img: "fb3",
            frames: "2",
            status: "startup",
          },
          {
            img: "fb4",
            frames: "1",
            status: "startup",
          },
        ],
        active: [
          {
            img: "fb5",
            frames: "1",
            status: "active",
          },
          {
            img: "fb7bstrng",
            frames: "2",
            status: "active",
          },
          {
            img: "fb10bstrng",
            frames: "3",
            status: "active",
          },
          {
            img: "fb13bstrng",
            frames: "3",
            status: "active",
          },
          {
            img: "fb14bstrng",
            frames: "30",
            status: "active",
          },
        ],
      },
    },
    hp: {
      name: "Hadouken HP (fierce)",
      slug: "ryu-specials-hadouken-hp",
      data: {
        damage: "22[0]/20[0]",
        stun: "7~13",
        stun_timer: "90",
        super_meter: "5",
      },
      steps: {
        startup: [
          {
            img: "fb1",
            frames: "2",
            status: "startup",
          },
          {
            img: "fb2",
            frames: "6",
            status: "startup",
          },
          {
            img: "fb3",
            frames: "2",
            status: "startup",
          },
          {
            img: "fb4",
            frames: "1",
            status: "startup",
          },
        ],
        active: [
          {
            img: "fb5",
            frames: "1",
            status: "active",
          },
          {
            img: "fb7bfrc",
            frames: "2",
            status: "active",
          },
          {
            img: "fb10bfrc",
            frames: "3",
            status: "active",
          },
          {
            img: "fb13bfrc",
            frames: "3",
            status: "active",
          },
          {
            img: "fb14bfrc",
            frames: "31",
            status: "active",
          },
        ],
      },
    },
  },
};

export const data = {
  normals: normals,
  specials: specials,
};
