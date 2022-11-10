import styles from '../styles/components/Leaderboard.module.css'

export default function Leaderboard(props) {
  return (
    <div className={styles.leaderboardContainer}>
      <h2 className={styles.title}>Leaderboard</h2>
      <table className={styles.leaderboard}>
        <thead>
          <tr className={styles.row}>
            <th></th>
            <th>Name</th>
            <th>Rating</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {props.leaders.map((user, position) => (
            <tr key={user.username} className={styles.row}>
              <td>{position + 1}.</td>
              <td>
                {user.username} {position == 0 ? '👑' : ''}
              </td>
              <td>{user.rating}</td>
              <td>{user.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
