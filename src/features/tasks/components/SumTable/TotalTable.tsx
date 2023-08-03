import type { CSSProperties } from '../../../../types'
import { useFoodsAction } from '../../hooks/FoodHook'

const TotalTable = (): JSX.Element => {
    const {totalCalories} = useFoodsAction()

    return (
        <div style={styles.tableTotal}>
            <div style={styles.tableTotalCalories}>Total Calories: {totalCalories()}</div>
        </div>
    )
}

const styles: CSSProperties = {
    tableTotal: {
        display: 'flex',
        fontSize: '24px',
        borderBottom: '1px solid #D8D8D8',
    },
    tableTotalCalories: {
        padding: '16px',
        width: '100%',
    },
}

export default TotalTable