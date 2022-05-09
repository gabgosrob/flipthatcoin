import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { GiCoinflip } from "react-icons/gi";

import { logout } from "../utils/accounts.js";
import styles from "../styles/components/Header.module.css";

export default function Header(props) {
    let registration;
    if (props.loggedIn) {
        registration = <button onClick={logout}>Logout</button>;
    } else {
        registration = (
            <div>
                <Link href="/login">
                    <button>Login</button>
                </Link>
                <Link href="/signup">
                    <button>Signup</button>
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.headerContainer}>
            <Link href="/me">
                <MdAccountCircle size={50} className={styles.icon} />
            </Link>
            <Link href="/play">
                <GiCoinflip size={50} className={styles.icon} />
            </Link>
            <Link href="/">
                <h1 className={styles.title}> flipthatcoin </h1>
            </Link>
            {registration}
        </div>
    );
}
