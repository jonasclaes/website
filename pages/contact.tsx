import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Home - jonasclaes.be</title>
            </Head>

            <main className="min-h-screen h-full flex flex-col items-center justify-center gap-2 text-center pt-16">
                <h1 className="text-3xl md:text-6xl font-bold">
                    Let's get in touch
                </h1>
                <p className='text-xl md:text-3xl'>I would love to hear from you!</p>
            </main>

            <section className='flex items-center justify-center pb-8'>
                <div>
                    <h2 className='text-xl md:text-3xl font-bold'>My contact information:</h2>
                    <p><strong>E-mail:</strong> <a href="mailto:jonas@jonasclaes.be" className='text-blue-500'>jonas@jonasclaes.be</a></p>
                    <p><strong>Telephone:</strong> <a href="tel:+32484238902" className='text-blue-500'>+32 484 23 89 02</a></p>
                    <p><strong>Twitter:</strong> <a href="https://twitter.com/jonasclaesbe" className='text-blue-500' target={"_blank"}>@jonasclaesbe</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/jonasclaes" className='text-blue-500' target={"_blank"}>@jonasclaes</a></p>
                </div>
                {/* <div className=''>
                    <h2 className='text-xl md:text-3xl font-bold'>Contact form:</h2>
                    <form action="/contact" method="post">
                        <div className='pb-2'>
                            <label htmlFor="name" className='block font-bold'>Full name:</label>
                            <input type="text" name="name" id="name" placeholder='John Doe' className='bg-gray-900 border-0 w-full rounded-md' />
                            <small>Please enter your full name here.</small>
                        </div>
                        <div className='pb-2'>
                            <label htmlFor="email" className='block font-bold'>Your e-mail address:</label>
                            <input type="email" name="email" id="email" placeholder='john.doe@example.com' className='bg-gray-900 border-0 w-full rounded-md' />
                            <small>Please enter your e-mail address here.</small>
                        </div>
                        <div className='pb-2'>
                            <label htmlFor="body" className='block font-bold'>Message text:</label>
                            <textarea name="body" id="body" placeholder='Your text here...' className='bg-gray-900 border-0 w-full rounded-md' rows={8} />
                            <small>Please enter your message text here.</small>
                        </div>
                        <button type="submit" className='block bg-blue-600 hover:bg-blue-700 transition-all duration-300 p-2 w-full rounded-md'>Send!</button>
                    </form>
                </div> */}
            </section>
        </Layout>
    )
}

export default Home
