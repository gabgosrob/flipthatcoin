import { login } from "../utils/accounts.js";
import Header from "../components/header";
import pageStyles from "../styles/pages/Page.module.css";

export default function Login() {
    return (
        <div className={pageStyles.mainContainer}>
            <Header />
            <h1>Login</h1>
            <div>
                <div>Username</div>
                <input type="text" id="username" />
            </div>
            <div>
                <div>Password</div>
                <input type="password" id="password" />
            </div>
            <button onClick={login}>Right Arrow</button>
        </div>
    );
}
