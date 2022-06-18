import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { NextComponentType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Layout: NextComponentType = ({ children }) => {
  const router = useRouter();

  const [showDropdownNav, setShowDropdownNav] = useState(false);

  const navigationItems = [
    {
      text: "home",
      href: '/'
    },
    {
      text: "projects",
      href: '/projects'
    },
    {
      text: "contact",
      href: '/contact'
    },
  ]

  return (
    <>
      <div className="h-full min-h-screen w-full bg-gray-800 text-white">
        <div className="absolute top-0 z-50 w-full bg-gray-900">
          <div className="container mx-auto">
            <nav className="mx-auto flex h-16 max-w-6xl flex-row items-center justify-between px-6 text-white">
              <span className="font-bold">jonasclaes.be</span>
              <ul className="hidden xs:flex flex-row space-x-4">
                {navigationItems.map(navigationItem => <li
                  className={classNames({
                    "transition-colors duration-300 hover:text-blue-500": true,
                    "font-bold": router.pathname === navigationItem.href
                  })}
                  key={navigationItem.text}
                >
                  <Link href={navigationItem.href}>
                    <a>{navigationItem.text}</a>
                  </Link>
                </li>
                )}
              </ul>
              <span className="block xs:hidden cursor-pointer" onClick={() => setShowDropdownNav(!showDropdownNav)}><FontAwesomeIcon icon={faBars} /></span>
            </nav>
            <div className={classNames({
              "bg-gray-900 px-6 py-6 xs:hidden": true,
              "hidden": !showDropdownNav,
              "block": showDropdownNav
            })}>
              <ul className="grid grid-cols-1 gap-4">
                {navigationItems.map(navigationItem => <li
                  className={classNames({
                    "transition-colors duration-300 hover:text-blue-500": true,
                    "font-bold": router.pathname === navigationItem.href
                  })}
                  key={navigationItem.text}
                >
                  <Link href={navigationItem.href}>
                    <a>{navigationItem.text}</a>
                  </Link>
                </li>
                )}
              </ul>
            </div>
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
