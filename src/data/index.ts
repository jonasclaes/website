import { Projects } from "@/types/Projects";
import { ProjectStatus } from "@/types/ProjectStatus";

const data: { projects: Projects } = {
  projects: [
    {
      slug: "delta-technics-smart-documentation-system",
      name: "Delta Technics",
      description: "Smart Documentation System",
      cover: require("@/assets/projects/delta-technics.png"),
      coverBackgroundFill: "#31373e",
      status: ProjectStatus.FINISHED,
      date: new Date("2021-12-24T15:00:00.000Z"),
      content: () =>
        import("@/data/delta-technics-smart-documentation-system.vue").then(
          (res) => res.default
        ),
    },
    {
      slug: "thomas-more-digital-innovation-cloud-server",
      name: "Thomas More",
      description: "Digital Innovation Cloud Server",
      cover: require("@/assets/projects/thomas-more.png"),
      coverBackgroundFill: "#0d203b",
      status: ProjectStatus.IN_PROGRESS,
    },
    {
      slug: "jochen-marien-domotica-arduino-homeassistant",
      name: "Jochen Mariën",
      description: "Domotica met Arduino en Home Assistant",
      cover: require("@/assets/projects/thomas-more.png"),
      coverBackgroundFill: "#0d203b",
      status: ProjectStatus.IN_PROGRESS,
    },
    {
      slug: "friendship-bubble-discord-bot",
      name: "Friendship Bubble",
      description: "Discord Bot",
      cover: require("@/assets/projects/friendship-bubble.png"),
      coverBackgroundFill: "#5d6179",
      status: ProjectStatus.IN_PROGRESS,
      content: () =>
        import("@/data/friendship-bubble-discord-bot.vue").then(
          (res) => res.default
        ),
    },
    {
      slug: "friendship-bubble-discord-bot-website",
      name: "Friendship Bubble",
      description: "Discord Bot Website",
      cover: require("@/assets/projects/friendship-bubble.png"),
      coverBackgroundFill: "#5d6179",
      status: ProjectStatus.IN_PROGRESS,
    },
    {
      slug: "watertechniek-teunissen-datalogging",
      name: "Watertechniek Teunissen",
      description: "Datalogging",
      cover: require("@/assets/projects/watertechniek-teunissen.png"),
      coverBackgroundFill: "#23547b",
      status: ProjectStatus.FINISHED,
      date: new Date("2020-06-30T15:00:00.000Z"),
    },
    {
      slug: "van-roey-interactive-wall",
      name: "Van Roey",
      description: "Interactive Wall",
      cover: require("@/assets/projects/van-roey.png"),
      coverBackgroundFill: "#76b9f0",
      status: ProjectStatus.FINISHED,
    },
    {
      slug: "jonas-claes-kadoosje",
      name: "Jonas Claes",
      description: "Kadoosje.net",
      cover: require("@/assets/projects/kadoosje.png"),
      coverBackgroundFill: "#e84e36",
      status: ProjectStatus.IN_PROGRESS,
    },
  ],
};

export default data;
