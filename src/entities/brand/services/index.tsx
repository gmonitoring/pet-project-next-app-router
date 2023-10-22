import { Brand } from '@/entities/brand/types'

export const getPopularBrands = async (): Promise<Array<Brand>> => {
  // const res = await fetch('http://127.0.0.1:64975/brands')
  //
  // return await res.json()

  return [
    {
      id: 1,
      name: 'Pattek ФИЛИПП',
      image: '/images/Rolex.png',
    },
    {
      id: 2,
      name: 'ROLEX',
      image: '/images/Rolex.png',
    },
    {
      id: 3,
      name: 'Audemars Piguet',
      image: '/images/Rolex.png',
    },
    {
      id: 4,
      name: 'Vacheron Constantin',
      image: '/images/Rolex.png',
    },
    {
      id: 5,
      name: 'Seiko',
      image: '/images/Rolex.png',
    },
    {
      id: 6,
      name: 'Omega',
      image: '/images/Rolex.png',
    },
  ]
}
