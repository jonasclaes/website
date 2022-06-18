import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import {
  getAllProjectSlugs,
  getProjectData,
  ProjectEntry,
} from "../../lib/projects";
import styles from "../../styles/project.module.css";

interface Props {
  projectData: ProjectEntry;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectSlugs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug || params.slug instanceof Array)
    throw new Error("Missing params");
  const projectData = await getProjectData(params.slug);

  return {
    props: {
      projectData,
    },
  };
};

const Project: NextPage<Props> = ({ children, projectData }) => {
  return (
    <Layout>
      <Head>
        <title>{projectData.title} - jonasclaes.be</title>
      </Head>

      <main className="h-full min-h-screen grid grid-cols-1 gap-4 pt-24 pb-8 text-left">
        <div>
          <h1 className="text-xl sm:text-3xl md:text-6xl font-bold break-words">{projectData.title}</h1>
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold">{projectData.client}</h2>
          {projectData.finished && <p className="text-md sm:text-lg md:text-xl opacity-50">{ new Date(projectData.date).toLocaleDateString('nl-BE', { dateStyle: "long" })}</p>}
        </div>
        <Image
          src={projectData.image || "/images/project-cover-not-found.jpg"}
          width={600}
          height={300}
          layout="responsive"
          alt={projectData.client}
          objectFit="cover"
          className="rounded-t-md md:rounded-l-md md:rounded-tr-none"
        />
        <div
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml || "" }}
          className={styles.post}
        ></div>
      </main>
    </Layout>
  );
};

export default Project;
