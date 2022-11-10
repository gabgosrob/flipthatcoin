import Router from 'next/router'
import { useState, useEffect } from 'react'

import { verify } from '../utils/accounts.js'
import Header from '../components/header'
import Loading from '../components/loading'
import Game from '../components/game'
import pageStyles from '../styles/pages/Page.module.css'
import styles from '../styles/pages/Play.module.css'

export default function Play() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    verify().then((user) => {
      if (!user) {
        Router.push('/login')
      } else {
        setUser(user)
      }
    })
  }, [])

  let page
  if (!user) {
    page = (
      <div className={pageStyles.mainContainer}>
        <Loading />
      </div>
    )
  } else {
    page = (
      <div className={pageStyles.mainContainer}>
        <Header loggedIn={true} />
        <h2 className={styles.title}>Play!</h2>
        <Game user={user} />
      </div>
    )
  }

  return page
}
