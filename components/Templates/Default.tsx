import { Header } from "../Organisms/Header"
import { ReactElement } from "react"

type Props = {
  children: ReactElement
}

const Default: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={`mx-auto px-8 sm:px-6 max-w-2xl xl:max-w-5xl`}>
        <div className={`flex flex-col justify-between h-screen`}>
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Default
