'use client'

import { useCart } from '@/modules/cart/store'
import { useEffect } from 'react'

const Hydration = () => {
  useEffect(() => {
    useCart.persist.rehydrate()
  }, [])
  return null
}

export default Hydration
