import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, FormEventHandler, useState } from 'react'
import Layout from '../components/layout'

const Home: NextPage = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit: FormEventHandler = (event: FormEvent) => {
        event.preventDefault();

        setSent(false);

        postData()
            .then(data => {
                console.log(data);
                setSent(true)
            })
            .catch(e => {
                console.error(e);
            })
    }

    const postData = async () => {
        const res = await fetch("/api/contact-form", {
            body: JSON.stringify({
                email,
                fullName,
                subject,
                message
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });

        const { error } = await res.json();

        if (error) {
            console.error(error);
            throw new Error(error);
        }
    }

    return (
        <Layout>
            <Head>
                <title>Home - jonasclaes.be</title>
            </Head>

            <main className="min-h-screen h-full flex flex-col items-center justify-center gap-2 text-center pt-16">
                <h1 className="text-3xl md:text-6xl font-bold">
                    Let&apos;s get in touch
                </h1>
                <p className='text-xl md:text-3xl'>I would love to hear from you!</p>
            </main>

            <section className='grid grid-cols-1 md:grid-cols-2 gap-2 items-start justify-center pb-8'>
                <div>
                    <h2 className='text-xl md:text-3xl font-bold'>My contact information</h2>
                    <p><strong>E-mail:</strong> <a href="mailto:jonas@jonasclaes.be" className='text-blue-500'>jonas@jonasclaes.be</a></p>
                    <p><strong>Telephone:</strong> <a href="tel:+32484238902" className='text-blue-500'>+32 484 23 89 02</a></p>
                    <p><strong>Twitter:</strong> <a href="https://twitter.com/jonasclaesbe" className='text-blue-500' target={"_blank"} rel={"noreferrer"}>@jonasclaesbe</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/jonasclaes" className='text-blue-500' target={"_blank"} rel={"noreferrer"}>@jonasclaes</a></p>
                </div>
                <div>
                    <h2 className='text-xl md:text-3xl font-bold'>Contact form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='pb-2'>
                            <label htmlFor="name" className='block font-bold'>Full name:</label>
                            <input type="text" name="name" id="name" placeholder='John Doe' className='bg-gray-900 border-0 w-full rounded-md' required value={fullName} onChange={(e) => {
                                setFullName(e.target.value);
                            }} />
                            <small>Please enter your full name here.</small>
                        </div>
                        <div className='pb-2'>
                            <label htmlFor="email" className='block font-bold'>Your e-mail address:</label>
                            <input type="email" name="email" id="email" placeholder='john.doe@example.com' className='bg-gray-900 border-0 w-full rounded-md' required value={email} onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                            <small>Please enter your e-mail address here.</small>
                        </div>
                        <div className='pb-2'>
                            <label htmlFor="subject" className='block font-bold'>Subject:</label>
                            <input type="text" name="subject" id="subject" placeholder='An inquiry about ...' className='bg-gray-900 border-0 w-full rounded-md' required value={subject} onChange={(e) => {
                                setSubject(e.target.value);
                            }} />
                            <small>Please enter a subject here.</small>
                        </div>
                        <div className='pb-2'>
                            <label htmlFor="message" className='block font-bold'>Message text:</label>
                            <textarea name="message" id="message" placeholder='Your text here...' className='bg-gray-900 border-0 w-full rounded-md' rows={8} required value={message} onChange={(e) => {
                                setMessage(e.target.value);
                            }} ></textarea>
                            <small>Please enter your message text here.</small>
                        </div>
                        <button type="submit" className={`block bg-blue-600 hover:bg-blue-700 transition-all duration-300 p-2 w-full rounded-md ${ sent ? 'bg-green-600 hover:bg-green-600' : '' }`} disabled={sent}>{ sent ? 'Your message has been sent!' : 'Send!' }</button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default Home
