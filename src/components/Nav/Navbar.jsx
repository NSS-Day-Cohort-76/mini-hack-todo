import { Link, Navigate } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {

    return (<ul className="nav-bar">
            <li className="nav-bar-item-logo">
                    <h3>to-doodle</h3>
            </li>
            <li className="nav-bar-item">
                <Link className="nav-bar-link" to="/">
                   Home
                </Link>
            </li>
            <li className="nav-bar-item">
                <Link className="nav-bar-link" to="/Leaderboard">
                   Leaderboard
                </Link>
            </li>
            {localStorage.getItem("task_user") ? (
                <li className="nav-bar-item">
                    <Link
                        className="nav-bar-link"
                        to=""
                        onClick={() => {
                            localStorage.removeItem("task_user");
                            Navigate("/login", { replace: true });
                        }}
                    >
                        Logout
                    </Link>
                </li>
            ) : (
                ""
            )}
        </ul>)



}