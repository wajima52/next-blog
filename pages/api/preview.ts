import { NextApiRequest, NextApiResponse } from "next"
import { getArticleBySlug } from "../../libs/functions/article"

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { secret, slug } = req.query

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: "Invalid token" })
  }

  const post = await getArticleBySlug(String(slug), true)

  if (!post) {
    return res.status(401).json({ message: "Invalid slug" })
  }

  res.setPreviewData({})

  res.redirect(`/blogs/${String(slug)}`)
}

export default preview
