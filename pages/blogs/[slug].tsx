import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"
import ReactMarkdown from "react-markdown"
import Default from "../../components/Templates/Default"
import { getArticleBySlug } from "../../libs/functions/article"
import { formatDateToJapanese } from "../../libs/functions/date"
import { Article } from "../../libs/types/Article"

type Props = {
  article: Article
}
const BlogArticle: React.FC<Props> = (props) => {
  return (
    <Default>
      <div
        className={
          "py-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700"
        }
      >
        <h1
          className={
            "text-3xl sm:text-4xl md:text-4xl tracking-tight leading-9 sm:leading-10 text-gray-900 dark:text-gray-100"
          }
        >
          {props.article.title}
        </h1>
        <div>
          <dt
            className={
              "inline-block mx-3 text-base font-medium leading-6 text-gray-500 dark:text-gray-400 inline-block"
            }
          >
            更新日
          </dt>
          <dd
            className={
              "text-base font-medium leading-6 text-gray-500 dark:text-gray-400 inline-block"
            }
          >
            <time dateTime={props.article.updatedAt}>
              {formatDateToJapanese(new Date(props.article.updatedAt))}
            </time>
          </dd>
        </div>
      </div>
      <ReactMarkdown className={"prose lg:prose-lg"}>
        {props.article.body}
      </ReactMarkdown>
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
