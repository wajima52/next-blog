import React, { useState } from "react"
import SpNav from "../Atoms/SpNav"

export const Header: React.FC = () => {
  return (
    <>
      <header className="fixed w-full flex bg-white  items-center justify-between flex-wrap bg-teal p-6 shadow-md">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          Site Logo
        </div>
        <SpNav />
      </header>
    </>
  )
}
