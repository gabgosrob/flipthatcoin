import Router from "next/router";

export const signup = async function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

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
