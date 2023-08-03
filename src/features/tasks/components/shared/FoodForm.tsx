import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { CSSProperties } from '../../../../types'
import { useFoodsAction } from '../../hooks/FoodHook'

interface FoodFormProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

const FoodForm = ({ setIsModalOpen,
}: FoodFormProps): JSX.Element => {
  const [name, setName] = useState<string>('')
  const [calories, setCalories] = useState<number>(0)

  const { addFood } = useFoodsAction()

  const handleSubmit = (): void => {
    addFood(name, calories)
    setIsModalOpen(false)
  }

  return (
    <form style={styles.form}>
      <div style={styles.formItem}>
        <label>Name：</label>
        <input
          type="text"
          value={name}
          onChange={(e): void => {
            setName(e.target.value)
          }}
          style={styles.formInput}
        />
      </div>
      <div style={styles.formItem}>
        <label>Calories：</label>
        <input
          type="number"
          value={calories}
          onChange={(e): void => {
            setCalories(Number(e.target.value))
          }}
          style={styles.formInput}
        />
      </div>
      <button
        type="button"
        style={styles.button}
        onClick={(): void => {
          handleSubmit()
        }}
      >
        Submit
      </button>
    </form>
  )
}

const styles: CSSProperties = {
  form: {
    fontSize: '24px',
  },
  formItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  formInput: {
    height: '40px',
    fontSize: '20px',
  },
  button: {
    backgroundColor: '#55C89F',
    color: '#fff',
    fontSize: '20px',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
  },
}

export default FoodForm