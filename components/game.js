import { useState, useEffect } from "react";
import Cookies from "js-cookie";

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
            <div>
                <div>
                    <div>{lastGame.username}</div>
                    <div>{lastGame.newRating}</div>
                    <div>{lastGame.ratingDelta}</div>
                </div>
                <div>{lastGame.result ? "WIN!!!" : "LOSS!!!"}</div>
                <div>
                    <div>{lastGame.opponentUsername}</div>
                    <div>{lastGame.opponentNewRating}</div>
                    <div>{lastGame.opponentRatingDelta}</div>
                </div>

                <button onClick={play}>Click here to play</button>
            </div>
        );
    }
}
