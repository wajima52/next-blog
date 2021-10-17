import * as contentful from "contentful"
import { ArticleFields } from "../types/ArticleFields"
import { Article } from "../types/Article"
import { Entry } from "contentful"

export const getArticles = async (): Promise<Article[]> => {
  const client = getClient()

  const entries = await client.getEntries<ArticleFields>()
  return entries.items.map((item) => convertEntryToArticle(item))
}

export const getArticleBySlug = async (
  slug: string,
  isPreview = false
): Promise<Article> => {
  const client = getClient(isPreview)
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

export const getClient = (isPreview = false) => {
  const params = {
    space: process.env.CONTENTFUL_SPACE,
    accessToken: isPreview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN,
  }
  return contentful.createClient(
    isPreview ? { host: "preview.contentful.com", ...params } : params
  )
}
