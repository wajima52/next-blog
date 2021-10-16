import { ArticleFields } from "./ArticleFields"

export type Article = ArticleFields & {
  tags: string[]
  createdAt: string
  updatedAt: string
}
