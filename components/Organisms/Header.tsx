import React, { useState } from "react"
import ToggleMenu from "../Atoms/ToggleMenu"

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed w-full flex bg-white  items-center justify-between flex-wrap bg-teal p-6 shadow-md">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        Site Logo
      </div>
      <div className="inline-flex">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-whiten lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ToggleMenu isOpen={isOpen}>
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
          >
            Blog
          </a>
        </div>
      </ToggleMenu>
    </nav>
  )
}
