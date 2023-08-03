import type { List, CSSProperties } from '../../../../types'
import { useFoodsAction } from '../../hooks/FoodHook'

interface FoodListItemProps {
    food: List
}

const FoodListItem = ({ food }: FoodListItemProps): JSX.Element => {
    const { deleteFood } = useFoodsAction()

    return (
        <div style={styles.tableBody}>
            <div style={styles.tableBodyFoodName}>
                {food.name}
            </div>
            <div style={styles.tableBodyCalories}>{food.calories} kcal</div>
            <div style={styles.tableRemoveTable}>
                <button style={styles.button} onClick={(): void => {
                    deleteFood(food.id)
                }}>Remove This List</button>
            </div>
        </div>
    )
}

const styles: CSSProperties = {
    tableBody: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #D8D8D8',
        fontSize: '20px',
        position: 'relative',
    },
    tableBodyFoodName: {
        width: '100%',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        overflowWrap: 'anywhere',
        borderRight: '1px solid #D8D8D8',
    },
    tableBodyCalories: {
        width: '100%',
        padding: '16px',
        overflowWrap: 'anywhere',
        borderRight: '1px solid #D8D8D8',
    },
    tableRemoveTable: {
        width: '100%',
        padding: '16px',
        overflowWrap: 'anywhere',
        borderRight: '1px solid #D8D8D8',
    },
    button: {
        padding: '16px',
        fontSize: '16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
}

export default FoodListItem