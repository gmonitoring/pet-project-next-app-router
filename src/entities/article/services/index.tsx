import { Article } from '@/entities/article/types'

export const getArticles = async (): Promise<Array<Article>> => {
  // try {
  //   return await fetch('http:localhost:3000/api/articles').then((res) =>
  //     res.json()
  //   )
  // } catch (e) {
  //   throw new Error(e)
  // }

  return [
    {
      id: 1,
      image: '/images/article_example.png',
      title: 'История бренда Audemars Piguet',
      text: '....',
      date: '07-07-2023',
      type: 'article',
    },
  ]
}
