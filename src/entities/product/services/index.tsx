import { Product } from '@/entities/product/types'

export const getProducts = async (): Promise<Array<Product>> => {
  try {
    return await fetch(`http://localhost:3000/api/products/`).then((res) =>
      res.json()
    )
  } catch (e) {
    throw new Error(e)
  }
}

export const getProduct = async (id: number): Promise<Product> => {
  try {
    return await fetch(`http://localhost:3000/api/products/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return res.json()
    })
  } catch (e) {
    console.log(e)
    throw new Error(e)
  }
}
