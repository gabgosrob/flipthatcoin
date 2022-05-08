import styles from "../styles/Index.module.css";
import Head from "next/head";
import Leaderboard from "../components/leaderboard";
import Header from "../components/header";

import { verify } from "../utils/accounts.js";

export default function Home({ leaders }) {
    return (
        <div className={styles.mainContainer}>
            <Head>
                <title>flipthatcoin</title>
            </Head>
            <Header />
            <Leaderboard leaders={leaders} />
            <button onClick={verify}>TESTUBG</button>
        </div>
    );
}

export async function getStaticProps() {
    const leaders = [
        { name: "John Doe", rating: 2200, wins: 55 },
        { name: "John Daft", rating: 1900, wins: 70 },
        { name: "John Dink", rating: 1850, wins: 25 },
        { name: "John Dog", rating: 1700, wins: 140 },
        { name: "John Doink", rating: 1670, wins: 38 },
        { name: "John Dak", rating: 1500, wins: 30 },
        { name: "John Dope", rating: 1440, wins: 22 },
        { name: "John Doz", rating: 1220, wins: 159 },
        { name: "John Doze", rating: 1067, wins: 26 },
        { name: "John Dof", rating: 866, wins: 78 },
    ];

    return {
        props: {
            leaders,
        },
    };
}
