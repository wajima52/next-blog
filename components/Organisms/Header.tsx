import React from "react"
import SpNav from "../Molecules/SpNav"
import PcNav from "../Molecules/PcNav"

export const Header: React.FC = () => {
  return (
    <>
      <header className="w-full flex bg-white  items-center justify-between flex-wrap bg-teal py-6 px-6 sm:px-20 shadow-md ">
        <div className="items-center flex-no-shrink mr-6">Site Logo</div>
        <PcNav />
        <SpNav />
      </header>
    </>
  )
}
