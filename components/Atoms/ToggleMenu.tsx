import React, { ReactElement } from "react"
import { MenuItems } from "../../libs/constants/menuItems"
import Link from "next/link"

export type ToggleProps = {
  isOpen: boolean
}

const ToggleMenu: React.FC<ToggleProps> = ({ isOpen }) => {
  return (
    <div
      className={`w-full block transition-height flex-grow right-0 lg:flex lg:items-center lg:w-auto overflow-hidden transform 
       ease-in-out duration-300 ${
         isOpen ? "translate-x-0" : "translate-x-full"
       } lg:h-auto`}
    >
      <div className="text-sm lg:flex-grow">
        {MenuItems.map((menuItem, index) => (
          <Link href={menuItem.href} key={index}>
            <a
              className={
                "block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
              }
            >
              {menuItem.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ToggleMenu
