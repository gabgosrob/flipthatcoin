import Header from "../components/header";
import { login } from "../scripts/accounts.js";

export default function Login() {
    return (
        <div>
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
