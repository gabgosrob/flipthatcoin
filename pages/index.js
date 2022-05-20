import Head from "next/head";
import { useState, useEffect } from "react";

import { verify } from "../utils/accounts.js";
import { getLeaders } from "../utils/leaderboard.js";
import Leaderboard from "../components/leaderboard";
import Header from "../components/header";
import Loading from "../components/loading";
import ResetCounter from "../components/resetCounter";
import pageStyles from "../styles/pages/Page.module.css";
import styles from "../styles/pages/Index.module.css";

export default function Home({ leaders }) {
    const [loggedIn, setLoggedIn] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        verify()
            .then((user) => {
                if (!user) {
                    setLoggedIn(false);
                }
                setLoading(false);
            })
            .catch((err) => {
                setLoggedIn(false);
                setLoading(false);
            });
    }, []);

    let page;

    if (loading) {
        page = (
            <div className={pageStyles.mainContainer}>
                <Loading />
            </div>
        );
    } else {
        page = (
            <div className={pageStyles.mainContainer}>
                <Head>
                    <title>flipthatcoin</title>
                </Head>
                <Header loggedIn={loggedIn} />
                <ResetCounter />
                <Leaderboard leaders={leaders} />
            </div>
        );
    }

    return page;
}

export async function getServerSideProps() {
    const leaders = await getLeaders();

    return {
        props: {
            leaders,
        },
    };
}
