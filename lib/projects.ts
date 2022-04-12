import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "projects");

export type ProjectEntry = {
  slug: string;
  title: string;
  client?: string;
  date?: string;
  image?: string;
  contentHtml?: string;
};

export const getSortedProjectsData = () => {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData: ProjectEntry[] = <ProjectEntry[]>fileNames.map(
    (fileName) => {
      // Remove ".md" from filename to get slug
      const slug = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to extract the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        ...matterResult.data,
      };
    }
  );

  // Sort projects by date
  // @ts-ignore
  return allProjectsData.sort((a: { date }, b: { date }) => {
    const dateA = Date.parse(a.date) || Date.now();
    const dateB = Date.parse(b.date) || Date.now();

    if (dateB === NaN) return -1;
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
  });
};

export const getAllProjectSlugs = () => {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

export const getProjectData = async (slug: string): Promise<ProjectEntry> => {
  // Get file under /projects
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to extract the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug
  return <ProjectEntry>{
    slug,
    contentHtml,
    ...matterResult.data,
  };
};
