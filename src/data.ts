import { Projects } from "./types/Projects";

const data: { projects: Projects } = {
  projects: [
    {
      slug: "delta-technics-smart-documentation-system",
      name: "Delta Technics",
      description: "Smart Documentation System",
      cover: require("./assets/projects/delta-technics-smart-documentation-system.png"),
    },
    {
      slug: "thomas-more-own-cloud-server",
      name: "Thomas More",
      description: "Own Cloud Server",
      cover: require("./assets/projects/thomas-more-own-cloud-server.png"),
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
      cover: require("./assets/projects/friendship-bubble-discord-bot.png"),
    },
  ],
};

export default data;
