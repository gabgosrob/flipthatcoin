import Link from "next/link";

export default function Header() {
    return (
        <div>
            <Link href="/me">
                <button>User</button>
            </Link>
            <h1> flipthatcoin </h1>
            <Link href="/play">
                <button>Play</button>
            </Link>
        </div>
    );
}
