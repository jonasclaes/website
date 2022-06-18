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

      <main className="h-full min-h-screen grid grid-cols-1 gap-4 pt-24 pb-8 text-left">
        <h1 className="text-xl sm:text-3xl md:text-6xl font-bold">Projects</h1>
        <ul className="flex w-full flex-col gap-4">
          {allProjectsData.map(({ slug, date, title, client, image, finished }) => (
            <Link href={`/projects/${slug}`} key={slug} passHref>
              <li
                className={
                  "transform cursor-pointer rounded-md bg-gray-700 shadow-md transition-all duration-300 hover:scale-105 grid grid-cols-1 sm:grid-cols-4"
                }
              >
                <Image
                  src={image || "/images/project-cover-not-found.jpg"}
                  height={300}
                  width={600}
                  alt={client}
                  objectFit="cover"
                  className="rounded-t-md sm:rounded-l-md sm:rounded-tr-none sm:col-span-1"
                />
                <div className="sm:col-span-3 p-4">
                  <p className="text-base sm:text-xl break-words">{client}</p>
                  <h2 className="text-xl sm:text-3xl font-bold break-words">{title}</h2>
                  <p className="text-sm sm:text-base">{date && finished ? new Date(date).toLocaleDateString('nl-BE', { dateStyle: "long" }) : ""}</p>
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
