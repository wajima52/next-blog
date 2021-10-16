import React from "react"
import Default from "../../components/Templates/Default"
import { GetStaticPaths, GetStaticProps } from "next"
import * as contentful from "contentful"
import { Article } from "../../libs/types/Article"
import { ArticleFields } from "../../libs/types/ArticleFields"

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
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const entry = (
    await client.getEntries<ArticleFields>({
      fields: {
        slug: String(context.params.slug),
      },
      content_type: "blogPost",
    })
  ).items[0]

  const article: Article = {
    tags: entry.metadata.tags.map((tag) => tag.sys.id),
    createdAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
    ...entry.fields,
  }

  return {
    props: {
      article: article,
    },
  }
}

export default BlogArticle
