import type { Dispatch, SetStateAction } from 'react'
import type { CSSProperties } from '../../../../types'
import FoodForm from './FoodForm'

interface FoodModalProps {
  headingTitle: string
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

const FoodModal = ({
  headingTitle,
  setIsModalOpen,
}: FoodModalProps): JSX.Element => {
  return (
    <div style={styles.container}>
      <div style={styles.modalTop}>
        <h1>{headingTitle}</h1>
        <span
          className="material-icons"
          style={styles.icon}
          onClick={(): void => {
            setIsModalOpen(false)
          }}
        >
          close
        </span>
      </div>
      <FoodForm
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  )
}

const styles: CSSProperties = {
  container: {
    border: '1px solid gray',
    position: 'fixed',
    top: '20%',
    left: '40%',
    width: '25%',
    backgroundColor: '#fff',
    padding: '28px',
    zIndex: 10,
  },
  modalTop: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    cursor: 'pointer',
  },
}

export default FoodModal