import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { foodsState } from '../../TaskAtoms'
import FoodListItem from './FoodListItem'
import type { List, CSSProperties } from '../../../../types'
import FoodModal from '../shared/FoodModal'
import TotalTable from '../SumTable/TotalTable'

const FoodList = (): JSX.Element => {
    const foods: List[] = useRecoilValue(foodsState)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Your Food Lists</h1>
            <div style={styles.taskButtons}>
                <button style={styles.button} onClick={(): void => {
                    setIsModalOpen(true)
                }}>
                    <span className="material-icons">add</span>Add Food
                </button>
            </div>
            <div>
                <div style={styles.tableHead}>
                    <div style={styles.tableHeaderFoodName}>Food Name</div>
                    <div style={styles.tableHeaderCalories}>Calories</div>
                    <div style={styles.tableRemoveTable}>Remove</div>
                </div>
                {foods.map((food: List) => {
                    return <FoodListItem food={food} key={food.id} />
                })}
                <TotalTable />
            </div>
            {isModalOpen && (
                <FoodModal
                    headingTitle="Add Your New Foods"
                    setIsModalOpen={setIsModalOpen}
                />
            )}
        </div>
    )
}

const styles: CSSProperties = {
    container: {
        padding: '20px',
    },
    heading: {
        color: '#55C89F',
        marginBottom: '60px',
    },
    taskButtons: {
        display: 'flex',
        marginBottom: '30px',
        position: 'relative',
    },
    button: {
        padding: '16px',
        fontSize: '16px',
        marginRight: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    tableHead: {
        display: 'flex',
        fontSize: '24px',
        borderBottom: '1px solid #D8D8D8',
    },
    tableHeaderFoodName: {
        padding: '16px',
        width: '100%',
    },
    tableHeaderCalories: {
        padding: '16px',
        width: '100%',
    },
    tableRemoveTable: {
        padding: '16px',
        width: '100%',
    },
}

export default FoodList