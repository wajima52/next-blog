import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import Default from "../../components/Templates/Default"
import { getArticleBySlug, getArticles } from "../../libs/functions/article"
import { Article } from "../../libs/types/Article"

type Props = {
  article: Article
}
const BlogArticle: React.FC<Props> = (props) => {
  return (
    <Default>
      <h1>{props.article.title}</h1>
      <h1>{props.article.updatedAt}</h1>
      <h1>{props.article.body}</h1>
    </Default>
  )
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const article = await getArticleBySlug(String(context.params.slug))

  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article: article,
    },
  }
}

export default BlogArticle
