import { signup } from "../utils/accounts.js";
import Header from "../components/header";

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
