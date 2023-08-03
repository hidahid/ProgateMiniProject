import { atom } from 'recoil'
import type { List } from '../../types'

export const foodsState = atom<List[]>({
  key: 'food',
  default: [
    {
      id: 1,
      name: 'Ayam Goreng',
      calories: 245,
    },
    {
      id: 2,
      name: 'Kentang Goreng',
      calories: 311,
    },
    {
      id: 3,
      name: 'Burger',
      calories: 294,
    },
  ],
})