import styles from "../styles/Leaderboard.module.css";

export default function Leaderboard(props) {
    return (
        <div>
            <h2>Leaderboard</h2>
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
                        <tr key={user.name}>
                            <td>{user.name}</td>
                            <td>{user.rating}</td>
                            <td>{user.wins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
