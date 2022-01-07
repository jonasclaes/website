import { ContentType } from "./ContentType";
import { ProjectStatus } from "./ProjectStatus";

export type Project = {
  // The URL slug of the project.
  slug: string;

  // The name of the project.
  name: string;

  // A short description of the project.
  description?: string;

  // A link to the cover image of the project.
  cover?: string;

  // The status of the project.
  status?: ProjectStatus;

  // The finish date of the project.
  date?: Date;

  // The content of the project.
  content?: string;

  // The type of the content of the project.
  contentType?: ContentType;
};
