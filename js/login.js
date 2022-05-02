import Router from "next/router";
import Cookies from "js-cookie";

export const login = async function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });

    if (response.status === 200) {
        const body = await response.json();
        Cookies.set("flipthatcoin_token", body.token, {
            expires: 3,
            sameSite: "strict",
        });
        Router.push("/");
    } else {
        alert("Error logging in");
    }
};
