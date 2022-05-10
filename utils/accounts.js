import Router from "next/router";
import Cookies from "js-cookie";

export const signup = async function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.length < 3 || username.length > 14) {
        alert("Username must be between 3 and 14 characters long");
        return;
    }

    if (password.length < 3 || password.length > 30) {
        alert("Password must be between 3 and 30 characters long");
        return;
    }

    const response = await fetch("/api/signup", {
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
        Router.push("/login");
    } else {
        alert("Error creating user");
    }
};

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

export const logout = async function () {
    Cookies.remove("flipthatcoin_token");
    Router.push("/");
    Router.reload();
};

export const verify = async function () {
    const token = Cookies.get("flipthatcoin_token");

    if (!token) {
        return false;
    }

    const response = await fetch("/api/verify", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (response.status === 200) {
        const user = await response.json();
        return user;
    } else {
        return false;
    }
};
