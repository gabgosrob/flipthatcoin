import Router from "next/router";
import { useState, useEffect } from "react";

import { verify } from "../utils/accounts.js";
import Header from "../components/header";
import Loading from "../components/loading";

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

    if (!user) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <div>
            <Header loggedIn={true} />
            <div>This is your user page. Hello!</div>
            <div>{user.id}</div>
            <div>{user.username}</div>
            <div>{user.rating}</div>
        </div>
    );
}
