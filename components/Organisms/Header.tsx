import React from "react"
import PcNav from "../Molecules/PcNav"
import SpNav from "../Molecules/SpNav"

export const Header: React.FC = () => {
  return (
    <>
      <header className="flex-wrap py-8 px-6 sm:px-20 w-full bg-white shadow-md">
        <div
          className={
            "flex justify-between items-center mx-auto max-w-2xl xl:max-w-4xl"
          }
        >
          <div className="items-center mr-6">Site Logo!!!</div>
          <PcNav />
          <SpNav />
        </div>
      </header>
    </>
  )
}
