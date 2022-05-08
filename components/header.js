import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { GiCoinflip } from "react-icons/gi";

import { logout } from "../utils/accounts.js";
import styles from "../styles/Header.module.css";

export default function Header(props) {
    if (props.loggedIn) {
        return (
            <div className={styles.header}>
                <Link href="/me">
                    <MdAccountCircle size={50} className={styles.icon} />
                </Link>
                <Link href="/play">
                    <GiCoinflip size={50} className={styles.icon} />
                </Link>
                <Link href="/">
                    <h1> flipthatcoin </h1>
                </Link>
                <button onClick={logout}>Logout</button>
            </div>
        );
    }

    return (
        <div className={styles.header}>
            <Link href="/me">
                <MdAccountCircle size={50} className={styles.icon} />
            </Link>
            <Link href="/play">
                <GiCoinflip size={50} className={styles.icon} />
            </Link>
            <Link href="/">
                <h1> flipthatcoin </h1>
            </Link>
            <Link href="/login">
                <button>Login</button>
            </Link>
            <Link href="/signup">
                <button>Signup</button>
            </Link>
        </div>
    );
}
