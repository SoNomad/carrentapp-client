import React, { useState } from 'react'
import styles from './carSwitch.module.scss'
import car from './car.png'
import car2 from './car2.png'
import flot from './flot.png'

const CarSwitcher = () => {


  const [active, setActive] = useState('car');


  const classHandler = (item) => {
    setActive((prev) => (prev = item))
  }

  return (
    <div>
      <div className={styles.items}>
        <div
          className={active === 'car' ? styles.active : styles.inActive}
          onClick={() => classHandler('car')}
        >
          <img src={car} alt="" height={50} />
        </div>
        <div
          className={active === 'jeep' ? styles.active : styles.inActive}
          onClick={() => classHandler('jeep')}
        >
          <img src={car2} alt="" height={50} />
        </div>
        <div
          className={active === 'ship' ? styles.active : styles.inActive}
          onClick={() => classHandler('ship')}
        >
          <img src={flot} alt="" height={50} />
        </div>
      </div>
      <div className={styles.subtitle}>
        <div className={styles.item}>Авто</div>
        <div className={styles.item}>Мото</div>
        <div className={styles.item}>Катеры</div>
      </div>
    </div>
  )
}

export default CarSwitcher
