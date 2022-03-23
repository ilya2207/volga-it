import React from 'react'
import welcomeImg from 'assets/img/welcome.png'
import styles from './StartPage.module.css'

const StartPage = () => {
  return (
    <div className={styles.inner}>
      <img className={styles.img} src={welcomeImg} alt="Welcome" />
      <h4 className={styles.title}>Let's find your perfect pair!</h4>
      <div className={styles.text}>
        Take the quiz to easily discover your perfect fit from thousands of
        styles
      </div>
      <div className={styles.btn}>Start now</div>
    </div>
  )
}

export default StartPage
