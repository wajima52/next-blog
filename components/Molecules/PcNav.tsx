import Link from "next/link"
import React from "react"
import { NavItems } from "../../libs/constants/navItems"

const PcNav = () => {
  return (
    <div className={"hidden sm:block"}>
      {NavItems.map((navItem, index) => (
        <Link href={navItem.href} key={index}>
          <a
            className={"py-2 px-8 ml-4 text-base font-medium hover:text-white"}
          >
            {navItem.name}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default PcNav
