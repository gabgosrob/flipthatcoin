import styles from "../styles/components/Leaderboard.module.css";

export default function Leaderboard(props) {
    return (
        <div>
            <h2 className={styles.title}>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {props.leaders.map((user) => (
                        <tr key={user.username}>
                            <td>{user.username}</td>
                            <td>{user.rating}</td>
                            <td>{user.wins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
