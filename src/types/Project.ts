import { Component } from "vue";
import { ProjectStatus } from "./ProjectStatus";

export type Project = {
  // The URL slug of the project.
  slug: string;

  // The name of the project.
  name: string;

  // A short description of the project.
  description?: string;

  // An array of labels to add to the project.
  labels?: string[];

  // A link to the cover image of the project.
  cover?: string;

  // The cover background to fill the page with.
  coverBackgroundFill?: string;

  // The status of the project.
  status?: ProjectStatus;

  // The finish date of the project.
  date?: Date;

  // The content of the project.
  content?: () => Promise<Component>;
};
