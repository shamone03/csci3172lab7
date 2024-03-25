import { useLocation } from "../../hooks/useLocation";
import { useNavigate } from "../../hooks/useNavigate";

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (e: React.MouseEvent, route: string) => {
        e.preventDefault();
        navigate(route);
    }

    return (
        <>
            {location !== "/login" && (
                <nav>
                    <ul>
                        <li><a href="/profile" onClick={e => handleClick(e, "/profile")}>Profile</a></li>
                        <li><a href="/dashboard" onClick={e => handleClick(e, "/dashboard")}>Dashboard</a></li>
                        <li><a href="/login" onClick={e => handleClick(e, "/login")}>Login</a></li>
                    </ul>
                </nav>
            )}
        </>
    )
}

export default NavBar;