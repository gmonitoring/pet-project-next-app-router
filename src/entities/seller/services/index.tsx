import { Seller } from '@/entities/seller/types'

export const getSeller = async (id: number): Promise<Seller> => {
  try {
    return await fetch(`http://localhost:3000/api/seller/${id}`, {
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
