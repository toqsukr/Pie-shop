import { Product } from '@/modules/menu/type'

export type ProductCardProp = Product & {
  onAddToCart: (id: string) => void
}
