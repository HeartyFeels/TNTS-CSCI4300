import "./NavBar.css"
import Link from "next/link";

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">KnowFlow</a>
        <ul>
            <li>
                <Link href="/signup">Signup</Link>
            </li>
            
            <li>
                <Link href="/login">Login</Link>
             </li>

            <li>
                <Link href="/schedule">Schedule</Link>
            </li>
        </ul>
    </nav>
}