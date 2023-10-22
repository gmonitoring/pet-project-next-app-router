export type DefaultPageProps<T = { slug: string }> = {
  params: T
  searchParams?: { [key: string]: string | string[] | undefined }
}

export type BEImage = {
  id: number
  src: string
}
