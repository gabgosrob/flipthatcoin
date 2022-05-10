import Router from "next/router";
import { useState, useEffect } from "react";

import { verify } from "../utils/accounts.js";
import Header from "../components/header";
import Loading from "../components/loading";
import pageStyles from "../styles/pages/Page.module.css";
import styles from "../styles/pages/Me.module.css";

export default function Me() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        verify().then((user) => {
            if (!user) {
                Router.push("/login");
            } else {
                setUser(user);
            }
        });
    }, []);

    let page;

    if (!user) {
        page = (
            <div className={pageStyles.mainContainer}>
                <Loading />
            </div>
        );
    } else {
        page = (
            <div className={pageStyles.mainContainer}>
                <Header loggedIn={true} />
                <h2 className={styles.title}>{user.username}'s stats</h2>
                <div className={styles.statContainer}>
                    <h3 className={styles.subtitle}>Rating</h3>
                    <div>{user.rating}</div>
                </div>
                <div className={styles.statContainer}>
                    <h3 className={styles.subtitle}>Wins</h3>
                    <div>{user.wins}</div>
                </div>
                <div className={styles.statContainer}>
                    <h3 className={styles.subtitle}>Losses</h3>
                    <div>{user.losses}</div>
                </div>
            </div>
        );
    }

    return page;
}
