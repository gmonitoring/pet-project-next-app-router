import { Product } from '@/entities/product/types'

export const ProductsMocks: Array<Product> = [
  {
    id: 1,
    sellerId: 1,
    name: 'Yacht-Master',
    price: 1529000,
    discountedPrice: 1220000,
    discount: 19,
    image: { id: 1, src: '/images/cardProduct/clock_image1.png' },
    images: [
      { id: 1, src: '/images/cardProduct/clock_image1.png' },
      { id: 2, src: '/images/cardProduct/clock_image2.png' },
      { id: 3, src: '/images/cardProduct/clock_image3.png' },
      { id: 4, src: '/images/cardProduct/clock_image4.png' },
      { id: 5, src: '/images/cardProduct/clock_image5.png' },
    ],
    description:
      'Продаются золотые мужские часы фирмы Rolex с золотым корпусов 585 пробы , общий вес 64,32 гр, размер 22 см, в отличном состоянии',
    create_at: '14 Июня',
    views: 1472,
    brand: {
      id: 2,
      name: 'ROLEX',
      image: '/images/Rolex.png',
    },
    sex: {
      id: 1,
      name: 'man',
      label: 'Мужской',
    },
    year: '2023',
    state: 'new',
    set: {
      id: 1,
      name: 'full',
      label: 'Полный',
      description: 'Часы, коробка и документы',
    },
    material: {
      id: 1,
      name: 'gold',
      label: 'Золото',
      background:
        'linear-gradient(135deg, rgba(190, 190, 190, 1), rgba(243, 243, 243, 1), rgba(141, 141, 141, 1), rgba(253, 255, 107, 0.53))',
    },
    glassMaterial: {
      id: 1,
      name: 'sapphire',
      label: 'Сапфир',
    },
    country: {
      id: 4,
      name: 'Switzerland',
      image: '/images/flags/Switzerland.png',
    },
    impermeability: 20,
    diameter: 20,
  },
  {
    id: 2,
    sellerId: 1,
    name: 'Yacht-Master',
    price: 1529000,
    discountedPrice: 1220000,
    discount: 19,
    image: { id: 1, src: '/images/cardProduct/clock_image2.png' },
    images: [
      { id: 1, src: '/images/cardProduct/clock_image1.png' },
      { id: 2, src: '/images/cardProduct/clock_image2.png' },
      { id: 3, src: '/images/cardProduct/clock_image3.png' },
      { id: 4, src: '/images/cardProduct/clock_image4.png' },
      { id: 5, src: '/images/cardProduct/clock_image5.png' },
    ],
    description:
      'Продаются золотые мужские часы фирмы Rolex с золотым корпусов 585 пробы , общий вес 64,32 гр, размер 22 см, в отличном состоянии',
    create_at: '14 Июня',
    views: 1472,
    brand: {
      id: 2,
      name: 'ROLEX',
      image: '/images/Rolex.png',
    },
    sex: {
      id: 1,
      name: 'man',
      label: 'Мужской',
    },
    year: '2023',
    state: 'new',
    set: {
      id: 1,
      name: 'full',
      label: 'Полный',
      description: 'Часы, коробка и документы',
    },
    material: {
      id: 1,
      name: 'gold',
      label: 'Золото',
      background:
        'linear-gradient(135deg, rgba(190, 190, 190, 1), rgba(243, 243, 243, 1), rgba(141, 141, 141, 1), rgba(253, 255, 107, 0.53))',
    },
    glassMaterial: {
      id: 1,
      name: 'sapphire',
      label: 'Сапфир',
    },
    country: {
      id: 4,
      name: 'Switzerland',
      image: '/images/flags/Switzerland.png',
    },
    impermeability: 20,
    diameter: 20,
  },
  {
    id: 3,
    sellerId: 1,
    name: 'Yacht-Master',
    price: 1529000,
    discountedPrice: 1220000,
    discount: 19,
    image: { id: 1, src: '/images/cardProduct/clock_image3.png' },
    images: [
      { id: 1, src: '/images/cardProduct/clock_image1.png' },
      { id: 2, src: '/images/cardProduct/clock_image2.png' },
      { id: 3, src: '/images/cardProduct/clock_image3.png' },
      { id: 4, src: '/images/cardProduct/clock_image4.png' },
      { id: 5, src: '/images/cardProduct/clock_image5.png' },
    ],
    description:
      'Продаются золотые мужские часы фирмы Rolex с золотым корпусов 585 пробы , общий вес 64,32 гр, размер 22 см, в отличном состоянии',
    create_at: '14 Июня',
    views: 1472,
    brand: {
      id: 2,
      name: 'ROLEX',
      image: '/images/Rolex.png',
    },
    sex: {
      id: 1,
      name: 'man',
      label: 'Мужской',
    },
    year: '2023',
    state: 'new',
    set: {
      id: 1,
      name: 'full',
      label: 'Полный',
      description: 'Часы, коробка и документы',
    },
    material: {
      id: 1,
      name: 'gold',
      label: 'Золото',
      background:
        'linear-gradient(135deg, rgba(190, 190, 190, 1), rgba(243, 243, 243, 1), rgba(141, 141, 141, 1), rgba(253, 255, 107, 0.53))',
    },
    glassMaterial: {
      id: 1,
      name: 'sapphire',
      label: 'Сапфир',
    },
    country: {
      id: 4,
      name: 'Switzerland',
      image: '/images/flags/Switzerland.png',
    },
    impermeability: 20,
    diameter: 20,
  },
  {
    id: 4,
    sellerId: 1,
    name: 'Yacht-Master',
    price: 1529000,
    discountedPrice: 1220000,
    discount: 19,
    image: { id: 1, src: '/images/cardProduct/clock_image4.png' },
    images: [
      { id: 1, src: '/images/cardProduct/clock_image1.png' },
      { id: 2, src: '/images/cardProduct/clock_image2.png' },
      { id: 3, src: '/images/cardProduct/clock_image3.png' },
      { id: 4, src: '/images/cardProduct/clock_image4.png' },
      { id: 5, src: '/images/cardProduct/clock_image5.png' },
    ],
    description:
      'Продаются золотые мужские часы фирмы Rolex с золотым корпусов 585 пробы , общий вес 64,32 гр, размер 22 см, в отличном состоянии',
    create_at: '14 Июня',
    views: 1472,
    brand: {
      id: 2,
      name: 'ROLEX',
      image: '/images/Rolex.png',
    },
    sex: {
      id: 1,
      name: 'man',
      label: 'Мужской',
    },
    year: '2023',
    state: 'new',
    set: {
      id: 1,
      name: 'full',
      label: 'Полный',
      description: 'Часы, коробка и документы',
    },
    material: {
      id: 1,
      name: 'gold',
      label: 'Золото',
      background:
        'linear-gradient(135deg, rgba(190, 190, 190, 1), rgba(243, 243, 243, 1), rgba(141, 141, 141, 1), rgba(253, 255, 107, 0.53))',
    },
    glassMaterial: {
      id: 1,
      name: 'sapphire',
      label: 'Сапфир',
    },
    country: {
      id: 4,
      name: 'Switzerland',
      image: '/images/flags/Switzerland.png',
    },
    impermeability: 20,
    diameter: 20,
  },
  {
    id: 5,
    sellerId: 1,
    name: 'Yacht-Master',
    price: 1529000,
    discountedPrice: 1220000,
    discount: 19,
    image: { id: 1, src: '/images/cardProduct/clock_image5.png' },
    images: [
      { id: 1, src: '/images/cardProduct/clock_image1.png' },
      { id: 2, src: '/images/cardProduct/clock_image2.png' },
      { id: 3, src: '/images/cardProduct/clock_image3.png' },
      { id: 4, src: '/images/cardProduct/clock_image4.png' },
      { id: 5, src: '/images/cardProduct/clock_image5.png' },
    ],
    description:
      'Продаются золотые мужские часы фирмы Rolex с золотым корпусов 585 пробы , общий вес 64,32 гр, размер 22 см, в отличном состоянии',
    create_at: '14 Июня',
    views: 1472,
    brand: {
      id: 2,
      name: 'ROLEX',
      image: '/images/Rolex.png',
    },
    sex: {
      id: 1,
      name: 'man',
      label: 'Мужской',
    },
    year: '2023',
    state: 'new',
    set: {
      id: 1,
      name: 'full',
      label: 'Полный',
      description: 'Часы, коробка и документы',
    },
    material: {
      id: 1,
      name: 'gold',
      label: 'Золото',
      background:
        'linear-gradient(135deg, rgba(190, 190, 190, 1), rgba(243, 243, 243, 1), rgba(141, 141, 141, 1), rgba(253, 255, 107, 0.53))',
    },
    glassMaterial: {
      id: 1,
      name: 'sapphire',
      label: 'Сапфир',
    },
    country: {
      id: 4,
      name: 'Switzerland',
      image: '/images/flags/Switzerland.png',
    },
    impermeability: 20,
    diameter: 20,
  },
]
