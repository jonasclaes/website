import { NextComponentType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout: NextComponentType = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className="h-full min-h-screen w-full bg-gray-800 text-white">
        <div className="absolute top-0 z-50 w-full bg-transparent">
          <div className="container mx-auto">
            <nav className="mx-auto flex h-16 max-w-6xl flex-row items-center justify-between px-6 font-bold text-white">
              <span>jonasclaes.be</span>
              <ul className="flex flex-row space-x-4">
                <li
                  className={`transition-colors duration-300 hover:text-blue-500 ${
                    router.pathname == "/" ? "border-b-2 border-white" : ""
                  }`}
                >
                  <Link href="/">
                    <a>home</a>
                  </Link>
                </li>
                <li
                  className={`transition-colors duration-300 hover:text-blue-500 ${
                    router.pathname == "/projects"
                      ? "border-b-2 border-white"
                      : ""
                  }`}
                >
                  <Link href="/projects">
                    <a>projects</a>
                  </Link>
                </li>
                <li
                  className={`transition-colors duration-300 hover:text-blue-500 ${
                    router.pathname == "/contact"
                      ? "border-b-2 border-white"
                      : ""
                  }`}
                >
                  <Link href="/contact">
                    <a>contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="container mx-auto min-h-screen">
          <div className="mx-auto max-w-6xl px-6">{children}</div>
        </div>
        <footer className="flex h-16 w-full items-center justify-center bg-gray-700 text-white">
          <small>&copy; 2022 Jonas Claes. All rights reserved.</small>
        </footer>
      </div>
    </>
  );
};

export default Layout;
