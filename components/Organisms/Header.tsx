import React from "react"
import SpNav from "../Molecules/SpNav"
import PcNav from "../Molecules/PcNav"

export const Header: React.FC = () => {
  return (
    <>
      <header className="w-full bg-white flex-wrap bg-teal py-6 px-6 sm:px-20 shadow-md ">
        <div
          className={`flex items-center justify-between max-w-2xl xl:max-w-4xl mx-auto`}
        >
          <div className="items-center flex-no-shrink mr-6">Site Logo</div>
          <PcNav />
          <SpNav />
        </div>
      </header>
    </>
  )
}
