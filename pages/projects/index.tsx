import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import { getSortedProjectsData, ProjectEntry } from "../../lib/projects";

interface Props {
  allProjectsData: ProjectEntry[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allProjectsData = getSortedProjectsData();

  return {
    props: {
      allProjectsData,
    },
  };
};

const Projects: NextPage<Props> = ({ children, allProjectsData }) => {
  return (
    <Layout>
      <Head>
        <title>Projects - jonasclaes.be</title>
      </Head>

      <main className="flex h-full min-h-screen flex-col items-center justify-center gap-4 pt-16 pb-8 text-left">
        <h1 className="text-6xl font-bold">Projects</h1>
        <ul className="flex w-full flex-col gap-4">
          {allProjectsData.map(({ slug, date, title, client, image }) => (
            <Link href={`/projects/${slug}`} key={slug} passHref>
              <li
                className={
                  "flex transform cursor-pointer flex-col rounded-md bg-gray-700 shadow-md transition-all duration-300 hover:scale-105 md:flex-row"
                }
              >
                <Image
                  src={image || "/images/project-cover-not-found.jpg"}
                  height={100}
                  width={200}
                  alt={client}
                  objectFit="cover"
                  className="rounded-t-md md:rounded-l-md md:rounded-tr-none"
                />
                <div className="w-2/3 p-4">
                  <p className="text-xl">{client}</p>
                  <h2 className="text-3xl font-bold">{title}</h2>
                  <p className="text-md">{date}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Projects;
