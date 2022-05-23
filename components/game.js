import { useState } from "react";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            return toast.warn(
                "No more games available, please wait until reset.",
                { theme: "dark" }
            );
        }
        if (response.status != 200) {
            return toast.warn("Something went wrong."), { theme: "dark" };
        }

        const game = await response.json();
        setLastGame(game);
    };

    if (!lastGame) {
        return (
            <div className={styles.mainContainer}>
                <ToastContainer />
                <button onClick={play}>Click here to play</button>
                <div className={styles.disclaimer}>
                    Please do not setup a bot/script, as this application is
                    hosted for free as a hobby project.
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.mainContainer}>
                <ToastContainer />
                <div>Games left: {lastGame.gamesLeft}</div>
                <div className={styles.resultsContainer}>
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
            </div>
        );
    }
}
