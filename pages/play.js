import Router from "next/router";
import { useState, useEffect } from "react";

import { verify } from "../utils/accounts.js";
import Header from "../components/header";
import Loading from "../components/loading";

export default function Play() {
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
            <div>This is the play page.</div>
        </div>
    );
}
