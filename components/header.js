import Link from 'next/link'
import { MdAccountCircle } from 'react-icons/md'
import { GiCoinflip } from 'react-icons/gi'

import { logout } from '../utils/accounts.js'
import styles from '../styles/components/Header.module.css'

export default function Header(props) {
  let registration
  if (props.loggedIn) {
    registration = <button onClick={logout}>Logout</button>
  } else {
    registration = (
      <div>
        <Link href='/login' passHref>
          <button>Login</button>
        </Link>
        <Link href='/signup' passHref>
          <button>Signup</button>
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.headerContainer}>
      <Link href='/me' passHref>
        <MdAccountCircle size={50} className={styles.icon} />
      </Link>
      <Link href='/play' passHref>
        <GiCoinflip size={50} className={styles.icon} />
      </Link>
      <Link href='/' passHref>
        <h1 className={styles.title}> flipthatcoin </h1>
      </Link>
      {registration}
    </div>
  )
}
