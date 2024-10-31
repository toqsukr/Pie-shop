import { create } from 'zustand'
import { MenuStore, Product } from './type'

export const pizzas: Product[] = [
  {
    id: 'pzs-1',
    title: 'Hot Diablo',
    image: '/diablo.png',
    price: '6,25',
    maxAvailable: 9,
  },
  {
    id: 'pzs-2',
    title: 'Mushroom Dream',
    image: '/mushroom-dream.png',
    price: '5,99',
    maxAvailable: 13,
  },
  {
    id: 'pzs-3',
    title: 'Double Chicken',
    image: '/doublechicken.png',
    price: '7,59',
    maxAvailable: 7,
  },
  {
    id: 'pzs-4',
    title: 'Ultimete Cheese',
    image: '/ultimete-cheese.png',
    price: '6,00',
    maxAvailable: 2,
  },
  {
    id: 'pzs-5',
    title: 'Favorite Cheese',
    image: '/favorite-cheese.png',
    price: '7,29',
    maxAvailable: 15,
  },
  {
    id: 'pzs-6',
    title: 'Fresh Chorizo',
    image: '/fresh-chorizo.png',
    price: '8,05',
    maxAvailable: 7,
  },
]

export const pancakes: Product[] = [
  {
    id: 'pks-1',
    title: 'Pancakes',
    image: '/blini.png',
    price: '2,35',
    maxAvailable: 8,
  },
  {
    id: 'pks-2',
    title: 'Caviar Pancakes',
    image: '/blin-ikra.png',
    price: '7,99',
    maxAvailable: 4,
  },
  {
    id: 'pks-3',
    title: 'Julien Pancakes',
    image: '/blini-zhulben.png',
    price: '4,87',
    maxAvailable: 6,
  },
  {
    id: 'pks-4',
    title: 'Potato Pancakes',
    image: '/potato-blini.png',
    price: '2,99',
    maxAvailable: 12,
  },
]

export const burgers: Product[] = [
  {
    id: 'bgs-1',
    title: 'Meetiest Burger',
    image: '/meetiest-burger.png',
    price: '10,99',
    maxAvailable: 5,
  },
  {
    id: 'bgs-2',
    title: 'Super Cheesee',
    image: '/cheesee-burger.png',
    price: '8,25',
    maxAvailable: 9,
  },
  {
    id: 'bgs-3',
    title: 'Grill Burger',
    image: '/grill-burger.png',
    price: '12,00',
    maxAvailable: 3,
  },
]

export const drinks: Product[] = [
  {
    id: 'dks-1',
    title: 'Rich Cherry Juice',
    image: '/rich-cherry.avif',
    price: '3,99',
    maxAvailable: 25,
  },
  {
    id: 'dks-2',
    title: 'Rich Apple Juice',
    image: '/rich-apple.avif',
    price: '3,99',
    maxAvailable: 11,
  },
  {
    id: 'dks-3',
    title: 'Rich Orange Juice',
    image: '/rich-orange.avif',
    price: '3,99',
    maxAvailable: 17,
  },
]

export const useMenu = create<MenuStore>((_, get) => ({
  pizzas,
  burgers,
  pancakes,
  drinks,
  getAllMenu: () => {
    const menu = get()
    const result = Object.keys(menu).reduce<Product[]>((accum, key) => {
      const keyMenu = key as keyof MenuStore
      if (Array.isArray(menu[keyMenu])) {
        const arr = menu[keyMenu]
        return accum.concat(arr)
      }
      return accum
    }, [])
    return result
  },
}))
