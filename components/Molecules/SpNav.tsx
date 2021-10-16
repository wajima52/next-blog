import Link from "next/link"
import React, { useEffect, useState } from "react"
import { NavItems } from "../../libs/constants/navItems"

const SpNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])
  return (
    <div className={"sm:hidden"}>
      <div className="inline-flex">
        <button
          className="flex lg:hidden items-center py-2 px-3 hover:text-white rounded border hover:border-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-3 h-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`fixed w-full h-full block flex-grow top-20 right-0 z-10 overflow-hidden transform shadow-md bg-black bg-opacity-60 
       ease-in-out duration-300 ${
         isOpen ? "translate-x-0" : "translate-x-full"
       } lg:h-auto`}
      >
        <div
          className={`bg-white ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {NavItems.map((menuItem, index) => (
            <Link href={menuItem.href} key={index}>
              <a
                className={
                  "block py-2 px-3 ml-4 text-base font-medium hover:text-white"
                }
              >
                {menuItem.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpNav
