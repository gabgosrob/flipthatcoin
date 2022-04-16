import Head from "next/head";
import styles from "../styles/Leaderboard.module.css";

export default function Leaderboard({ leaders }) {
    return (
        <div>
            <div>
                <button>User</button>
                <h1> flipthatcoin </h1>
                <button>Play</button>
            </div>
            <div>
                <ul>
                    <li>
                        <h2>Name</h2>
                        <h2>Rating</h2>
                        <h2>Wins</h2>
                    </li>
                    {leaders.map((user) => (
                        <li key={user.name}>
                            <h3>{user.name}</h3>
                            <p>{user.rating}</p>
                            <p>{user.wins}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const leaders = [
        { name: "John Doe", rating: 2200, wins: 55 },
        { name: "John Doe", rating: 1900, wins: 70 },
        { name: "John Doe", rating: 1850, wins: 25 },
        { name: "John Doe", rating: 1700, wins: 140 },
        { name: "John Doe", rating: 1670, wins: 38 },
        { name: "John Doe", rating: 1500, wins: 30 },
        { name: "John Doe", rating: 1440, wins: 22 },
        { name: "John Doe", rating: 1220, wins: 159 },
        { name: "John Doe", rating: 1067, wins: 26 },
        { name: "John Doe", rating: 866, wins: 78 },
    ];

    return {
        props: {
            leaders,
        },
    };
}
