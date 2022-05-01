import Router from "next/router";

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
        alert("Login successful");
    } else {
        alert("Error logging in");
    }
};
