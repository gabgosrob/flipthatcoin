import { BiArrowToRight } from 'react-icons/bi'

import { signup } from '../utils/accounts.js'
import Header from '../components/header'
import pageStyles from '../styles/pages/Page.module.css'
import styles from '../styles/pages/Signup.module.css'

export default function Signup() {
  return (
    <div className={pageStyles.mainContainer}>
      <Header />
      <h2 className={styles.title}>Signup</h2>
      <div>
        <div>Username</div>
        <input type='text' id='username' />
      </div>
      <div>
        <div>Password</div>
        <input type='password' id='password' />
      </div>
      <BiArrowToRight className={styles.icon} size={30} onClick={signup} />
    </div>
  )
}
