import { BiArrowToRight } from "react-icons/bi";

import { login } from "../utils/accounts.js";
import Header from "../components/header";
import pageStyles from "../styles/pages/Page.module.css";
import styles from "../styles/pages/Login.module.css";

export default function Login() {
    return (
        <div className={pageStyles.mainContainer}>
            <Header />
            <h1 className={styles.title}>Login</h1>
            <div>
                <div>Username</div>
                <input type="text" id="username" />
            </div>
            <div>
                <div>Password</div>
                <input type="password" id="password" />
            </div>
            <BiArrowToRight className={styles.icon} size={30} onClick={login} />
        </div>
    );
}
