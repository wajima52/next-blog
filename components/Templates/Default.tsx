import React, { ReactElement } from "react"
import { Header } from "../Organisms/Header"

type Props = {
  children: ReactElement | ReactElement[]
}

const Default: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={`mx-auto px-8 sm:px-6 max-w-2xl xl:max-w-5xl`}>
        <div className={"flex flex-col justify-between h-screen"}>
          <main className={"mb-auto"}>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Default
