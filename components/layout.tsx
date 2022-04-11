import { NextComponentType } from "next"
import Link from "next/link"
import { useRouter } from "next/router"

const Layout: NextComponentType = ({ children }) => {

    const router = useRouter();

    return (
        <>
            <div className='min-h-screen h-full w-full bg-gray-800 text-white'>
                <div className="z-50 top-0 w-full absolute bg-transparent">
                    <div className="container mx-auto">
                        <nav className='max-w-6xl mx-auto flex flex-row items-center justify-between font-bold text-white h-16 px-6'>
                            <span>jonasclaes.be</span>
                            <ul className='flex flex-row space-x-4'>
                                <li className={`hover:text-blue-500 transition-colors duration-300 ${router.pathname == "/" ? "border-b-2 border-white" : ""}`}>
                                    <Link href='/'>
                                        <a>
                                            home
                                        </a>
                                    </Link>
                                </li>
                                <li className={`hover:text-blue-500 transition-colors duration-300 ${router.pathname == "/projects" ? "border-b-2 border-white" : ""}`}>
                                    <Link href='/projects'>
                                        <a>
                                            projects
                                        </a>
                                    </Link>
                                </li>
                                <li className={`hover:text-blue-500 transition-colors duration-300 ${router.pathname == "/contact" ? "border-b-2 border-white" : ""}`}>
                                    <Link href='/contact'>
                                        <a>
                                            contact
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="container mx-auto min-h-screen">
                    <div className='max-w-6xl mx-auto px-6'>
                        {children}
                    </div>
                </div>
                <footer className="flex h-16 w-full items-center justify-center bg-gray-700 text-white">
                    <small>&copy; 2022 Jonas Claes. All rights reserved.</small>
                </footer>
            </div>

        </>
    )
}

export default Layout