import styles from '../styles/components/Loading.module.css'

export default function Loading() {
  return (
    <div>
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
