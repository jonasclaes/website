import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from 'next/image'
import Layout from "../../components/layout";
import { getAllProjectSlugs, getProjectData, ProjectEntry } from "../../lib/projects";
import styles from '../../styles/project.module.css';

interface Props {
    projectData: ProjectEntry;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllProjectSlugs();

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params || !params.slug || params.slug instanceof Array) throw new Error("Missing params");
    const projectData = await getProjectData(params.slug);

    return {
        props: {
            projectData
        }
    }
}

const Project: NextPage<Props> = ({ children, projectData }) => {
    return (
        <Layout>
            <Head>
                <title>{projectData.title} - jonasclaes.be</title>
            </Head>

            <main className="min-h-screen h-full flex flex-col items-center justify-center space-y-4 text-left pt-16 pb-8">
                <h1 className='text-6xl font-bold'>Project</h1>
                <div className={"bg-gray-700 flex flex-col md:flex-row rounded-md shadow-md w-full"}>
                    <Image
                        src={projectData.image || "/images/project-cover-not-found.jpg"}
                        height={100}
                        width={200}
                        alt={projectData.client}
                        objectFit='cover'
                        className='rounded-t-md md:rounded-l-md md:rounded-tr-none'
                    />
                    <div className='p-4 w-2/3'>
                        <p className='text-xl'>{projectData.client}</p>
                        <h2 className='text-3xl font-bold'>{projectData.title}</h2>
                        <p className='text-md'>{projectData.date}</p>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml || "" }} className={styles.post}></div>
            </main>
        </Layout>
    )
}

export default Project