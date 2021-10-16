import * as contentful from "contentful"
import { GetStaticProps } from "next"
import Link from "next/link"
import React from "react"
import Default from "../../components/Templates/Default"
import { formatDateToJapanese } from "../../libs/functions/date"
import { Article } from "../../libs/types/Article"
import { ArticleFields } from "../../libs/types/ArticleFields"

type Props = {
  articles: Article[]
}

const Blogs: React.FC<Props> = (props) => {
  return (
    <>
      <Default>
        <div className={"divide-y"}>
          <div className={"pt-6 pb-8 space-y-2 md:space-y-5"}>
            <h1 className={"text-3xl font-light"}>記事一覧</h1>
          </div>
          <ul>
            {props.articles.map((article, index) => (
              <li className={"py-4"} key={index}>
                <Link href={`/blogs/${article.slug}`}>
                  <a>
                    <article
                      className={
                        "xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 hover:bg-gray-50"
                      }
                    >
                      <dl>
                        <dt className={"sr-only"}>更新日</dt>
                        <dd className={"text-base text-gray-500"}>
                          <time dateTime={article.publishedAt}>
                            {formatDateToJapanese(
                              new Date(article.publishedAt)
                            )}
                          </time>
                        </dd>
                      </dl>
                      <div className={"xl:col-span-3"}>
                        <div>
                          <h3 className={"text-2xl font-bold"}>
                            {article.title}
                          </h3>
                          <div className={"py-3 text-gray-500"}>
                            {article.description}
                          </div>
                        </div>
                      </div>
                    </article>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Default>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const entries = await client.getEntries<ArticleFields>()
  const articles: Article[] = entries.items.map((item) => ({
    tags: item.metadata.tags.map((tag) => tag.sys.id),
    createdAt: item.sys.createdAt,
    updatedAt: item.sys.updatedAt,
    ...item.fields,
  }))

  return {
    props: {
      articles: articles,
    },
  }
}

export default Blogs
