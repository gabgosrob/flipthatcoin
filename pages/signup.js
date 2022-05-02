import Header from "../components/header";
import { signup } from "../scripts/accounts.js";

export default function Signup() {
    return (
        <div>
            <Header />
            <h1>Signup</h1>
            <div>
                <div>Username</div>
                <input type="text" id="username" />
            </div>
            <div>
                <div>Password</div>
                <input type="password" id="password" />
            </div>
            <button onClick={signup}>Right Arrow</button>
        </div>
    );
}
