export type Project = {
  // The URL slug of the project.
  slug: string;

  // The name of the project.
  name: string;

  // A short description of the project.
  description?: string;

  // A link to the cover image of the project.
  cover?: string;
};
