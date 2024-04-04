import { Libre_Barcode_128 } from "next/font/google";
import "./NavBar.css"

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">KnowFlow</a>
        <ul>
            <li>
                <a href="/signup">Signup</a>
            </li>
            
            <li>
                <a href="/login">Login</a>
             </li>

            <li>
                <a href="/schedule">Schedule</a>
            </li>
        </ul>
    </nav>
}