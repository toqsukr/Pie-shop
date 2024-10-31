export type Product = {
  id: string
  image: string
  title: string
  price: string
  maxAvailable: number
}

export type MenuStore = {
  pizzas: Product[]
  burgers: Product[]
  pancakes: Product[]
  drinks: Product[]
  getAllMenu: () => Product[]
}
