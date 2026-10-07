import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  description?: string
  tags?: string[]
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/*.md', {
  transform(raw): Post[] {
    return raw
      .filter(({ frontmatter }) => Boolean(frontmatter.date))
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title as string,
        url,
        date: formatDate(frontmatter.date as string | Date),
        description: frontmatter.description as string | undefined,
        tags: (frontmatter.tags as string[] | undefined) ?? []
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string | Date) {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: date.getTime(),
    string: date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
}
