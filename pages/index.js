import Head from "next/head";
import Leaderboard from "../components/leaderboard";
import Header from "../components/header";

export default function Home({ leaders }) {
    return (
        <div>
            <Head>
                <title>flipthatcoin</title>
            </Head>
            <Header />
            <Leaderboard leaders={leaders} />
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
