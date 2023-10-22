import { AllFilters } from '@/entities/filters/types'

export const FiltersMocks: AllFilters = {
  sex: [
    {
      id: 1,
      name: 'man',
      label: 'Мужской',
    },
    {
      id: 2,
      name: 'woman',
      label: 'Женский',
    },
  ],
  brand: [
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
  ],
  price: {
    min: 1000,
    max: 10000,
  },
  set: [
    {
      id: 1,
      name: 'full',
      label: 'Полный',
      description: 'Часы, коробка и документы',
    },
    {
      id: 2,
      name: 'partial',
      label: 'Частичный',
      description: 'Часы, документы / только часы',
    },
  ],
  availability: [
    {
      id: 1,
      name: 'in_stock',
      label: 'В наличии',
      description: 'Можно забрать уже сегодня',
    },
    {
      id: 2,
      name: 'on_order',
      label: 'Под заказ',
      description: 'Закажем специально для вас',
    },
  ],
  material: [
    {
      id: 1,
      name: 'gold',
      label: 'Золото',
      background:
        'linear-gradient(135deg, rgba(190, 190, 190, 1), rgba(243, 243, 243, 1), rgba(141, 141, 141, 1), rgba(253, 255, 107, 0.53))',
    },
    {
      id: 2,
      name: 'platinum',
      label: 'Платина',
      background:
        'linear-gradient(135deg, rgba(209, 217, 231, 1), rgba(255, 255, 255, 1), rgba(188, 195, 207, 1))',
    },
  ],
  glassMaterial: [
    {
      id: 1,
      name: 'sapphire',
      label: 'Сапфир',
    },
    {
      id: 2,
      name: 'substrate',
      label: 'Минеральное',
    },
  ],
  country: [
    {
      id: 1,
      name: 'France',
      image: '/images/flags/France.png',
    },
    {
      id: 2,
      name: 'Germany',
      image: '/images/flags/Germany.png',
    },
    {
      id: 3,
      name: 'Russia',
      image: '/images/flags/Russia.png',
    },
    {
      id: 4,
      name: 'Switzerland',
      image: '/images/flags/Switzerland.png',
    },
  ],
}
