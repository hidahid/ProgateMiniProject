import { useRecoilState } from 'recoil'
import { foodsState } from '../TaskAtoms'
import type { List } from '../../../types'

interface useFoodActionType {
    addFood: (
        name: string,
        calories: number,
    ) => void
    deleteFood: (foodId: number) => void
    totalCalories: () => number
}

export const useFoodsAction = (): useFoodActionType => {
    const [foods, setFoods] = useRecoilState<List[]>(foodsState)
    let total = 0;

    const addFood = (
        name: string,
        calories: number,
    ): void => {
        const lastData = foods[foods.length - 1]
        const newFood: List = {
            id: lastData?.id ? lastData.id + 1 : 1,
            name,
            calories,
        }
        setFoods([...foods, newFood])
    }

    const deleteFood = (foodId: number): void => {
        const updatedFoods: List[] = foods.filter((food) =>
            food.id !== foodId
        )
        setFoods(updatedFoods)
    }

    const totalCalories = (): number => {
        foods.map((food) =>
            total += food.calories
        )
        return total;
    }

    return {
        addFood,
        deleteFood,
        totalCalories,
    }
}