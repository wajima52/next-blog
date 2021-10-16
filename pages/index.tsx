import { NextSeo } from "next-seo"
import React from "react"
import Default from "../components/Templates/Default"

const Home: React.FC = () => {
  return (
    <>
      <Default>
        <NextSeo title={"Top Page"} description={"Top Page"} />
        <div>hogehuge</div>
      </Default>
    </>
  )
}

export default Home
