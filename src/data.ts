import { Projects } from "./types/Projects";

const data: { projects: Projects } = {
  projects: [
    {
      slug: "delta-technics-smart-documentation-system",
      name: "Delta Technics",
      description: "Smart Documentation System",
      cover: require("./assets/projects/delta-technics.png"),
    },
    {
      slug: "thomas-more-own-cloud-server",
      name: "Thomas More",
      description: "Own Cloud Server",
      cover: require("./assets/projects/thomas-more.png"),
    },
    {
      slug: "jochen-marien-domotica-arduino-homeassistant",
      name: "Jochen Mariën",
      description: "Domotica met Arduino en Home Assistant",
      cover: require("./assets/projects/jochen-marien-domotica-arduino-homeassistant.png"),
    },
    {
      slug: "friendship-bubble-discord-bot",
      name: "Friendship Bubble",
      description: "Discord Bot",
      cover: require("./assets/projects/friendship-bubble.png"),
    },
    {
      slug: "friendship-bubble-discord-bot-website",
      name: "Friendship Bubble",
      description: "Discord Bot Website",
      cover: require("./assets/projects/friendship-bubble.png"),
    },
    {
      slug: "watertechniek-teunissen-datalogging",
      name: "Watertechniek Teunissen",
      description: "Datalogging",
      cover: require("./assets/projects/watertechniek-teunissen.png"),
    },
    {
      slug: "van-roey-interactive-wall",
      name: "Van Roey",
      description: "Interactive Wall",
      cover: require("./assets/projects/van-roey.png"),
    },
    {
      slug: "jonas-claes-kadoosje",
      name: "Jonas Claes",
      description: "Kadoosje.net",
      cover: require("./assets/projects/kadoosje.png"),
    },
  ],
};

export default data;
