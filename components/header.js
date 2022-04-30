import Link from "next/link";

import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/me">
                <button>Me</button>
            </Link>
            <h1> flipthatcoin </h1>
            <Link href="/play">
                <button>Play</button>
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
