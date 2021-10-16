import * as contentful from "contentful"
import { ArticleFields } from "../types/ArticleFields"
import { Article } from "../types/Article"
import { Entry } from "contentful"

export const getArticles = async (): Promise<Article[]> => {
  const client = getClient()

  const entries = await client.getEntries<ArticleFields>()
  return entries.items.map((item) => convertEntryToArticle(item))
}

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const client = getClient()
  const entries = await client.getEntries<ArticleFields>({
    "fields.slug": String(slug),
    content_type: "blogPost",
  })

  return entries.items.length > 0
    ? convertEntryToArticle(entries.items[0])
    : null
}

const convertEntryToArticle = (entry: Entry<ArticleFields>): Article => {
  return {
    tags: entry.metadata.tags.map((tag) => tag.sys.id),
    createdAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
    ...entry.fields,
  }
}

const getClient = () => {
  return contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
}
