import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { GiCoinflip } from "react-icons/gi";

import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/me">
                <MdAccountCircle size={50} />
            </Link>
            <Link href="/play">
                <GiCoinflip size={50} />
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
