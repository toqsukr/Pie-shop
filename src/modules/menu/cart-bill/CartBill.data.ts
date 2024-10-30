import { CartPositionProp } from '@/widgets/cart-position/CartPosition.type'

export const cartPositions: CartPositionProp[] = [
  {
    id: '1',
    amount: 1,
    image: '/mushroom-dream.avif',
    price: '5,99',
    title: 'Mushroom Dream',
    maxAvailable: 13,
    onDecrement: () => {},
    onIncrement: () => {},
    onEdit: () => {},
  },
  {
    id: '2',
    amount: 2,
    image: '/cheesee-burger.png',
    price: '8,25',
    title: 'Super Cheesee',
    maxAvailable: 9,
    onDecrement: () => {},
    onIncrement: () => {},
    onEdit: () => {},
  },
  {
    id: '3',
    amount: 1,
    image: '/rich-orange.avif',
    price: '3,99',
    title: 'Rich Orange Juice',
    maxAvailable: 17,
    onDecrement: () => {},
    onIncrement: () => {},
    onEdit: () => {},
  },
]
