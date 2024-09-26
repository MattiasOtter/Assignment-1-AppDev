type Characters = {
  name: string;
  id: string;
  image: string;
  description: string;
};

export const characters: Characters[] = [
  {
    name: "Ahri",
    id: "ahri",
    image: require("../assets/images/ahri/Ahri_0.jpg"),
    description:
      "A nine-tailed fox who uses her charm and magic to outsmart her enemies.",
  },
  {
    name: "Garen",
    id: "garen",
    image: require("../assets/images/garen/Garen_0.jpg"),
    description:
      "A formidable warrior known for his strength and relentless pursuit of justice.",
  },
  {
    name: "Lux",
    id: "lux",
    image: require("../assets/images/lux/Lux_0.jpg"),
    description:
      "A bright and talented mage who wields the power of light to illuminate the darkness.",
  },
  {
    name: "Zed",
    id: "zed",
    image: require("../assets/images/zed/Zed_0.jpg"),
    description:
      "A master of shadows who strikes fear into his enemies with his deadly agility.",
  },
  {
    name: "Jinx",
    id: "jinx",
    image: require("../assets/images/jinx/Jinx_0.jpg"),
    description:
      "A chaotic and unpredictable criminal who revels in destruction.",
  },
  {
    name: "Thresh",
    id: "thresh",
    image: require("../assets/images/thresh/Thresh_0.jpg"),
    description:
      "A lantern-carrying wraith who captures souls and torments his victims.",
  },
  {
    name: "Katarina",
    id: "katarina",
    image: require("../assets/images/katarina/Katarina_0.jpg"),
    description:
      "A deadly assassin who uses her blades to eliminate targets with swift precision.",
  },
  {
    name: "Lee Sin",
    id: "lee-sin",
    image: require("../assets/images/lee-sin/LeeSin_0.jpg"),
    description:
      "A blind monk who uses his martial arts skills to protect his allies and defeat his foes.",
  },
  {
    name: "Riven",
    id: "riven",
    image: require("../assets/images/riven/Riven_0.jpg"),
    description:
      "A former soldier who wields a broken sword and seeks redemption for her past.",
  },
  {
    name: "Vayne",
    id: "vayne",
    image: require("../assets/images/vayne/Vayne_0.jpg"),
    description:
      "A skilled hunter who stalks her prey under the cover of darkness.",
  },
];
