import { useState } from "react";
import Cookies from "js-cookie";

import styles from "../styles/components/Game.module.css";

export default function Game(props) {
    const [lastGame, setLastGame] = useState(null);
    const token = Cookies.get("flipthatcoin_token");

    const play = async () => {
        const response = await fetch("/api/play", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.status === 405) {
            return alert("No games left for this user.");
        }
        if (response.status != 200) {
            return alert("Something went wrong");
        }

        const game = await response.json();
        setLastGame(game);
    };

    if (!lastGame) {
        return <button onClick={play}>Click here to play</button>;
    } else {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.gameContainer}>
                    <div className={styles.playerContainer}>
                        <h2 className={styles.title}>YOURSELF</h2>
                        <h3 className={styles.subtitle}>Username</h3>
                        <div
                            className={
                                lastGame.result ? styles.win : styles.loss
                            }
                        >
                            {lastGame.username}
                        </div>
                        <h3 className={styles.subtitle}>New Rating</h3>
                        <div>{lastGame.newRating}</div>
                        <h3 className={styles.subtitle}>Change</h3>
                        <div>
                            {lastGame.ratingDelta > 0 ? "+" : ""}
                            {lastGame.ratingDelta}
                        </div>
                    </div>
                    <div>{lastGame.result ? "WIN!!!" : "LOSS!!!"}</div>
                    <div className={styles.playerContainer}>
                        <h2 className={styles.title}>OPPONENT</h2>
                        <h3 className={styles.subtitle}>Username</h3>
                        <div
                            className={
                                lastGame.result ? styles.loss : styles.win
                            }
                        >
                            {lastGame.opponentUsername}
                        </div>
                        <h3 className={styles.subtitle}>New Rating</h3>
                        <div>{lastGame.opponentNewRating}</div>
                        <h3 className={styles.subtitle}>Change</h3>
                        <div>
                            {lastGame.opponentRatingDelta > 0 ? "+" : ""}
                            {lastGame.opponentRatingDelta}
                        </div>
                    </div>
                </div>
                <button onClick={play}>Click here to play</button>
            </div>
        );
    }
}
