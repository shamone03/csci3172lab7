import { useNavigate } from "../../hooks/useNavigate";

function NavBar() {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent, route: string) => {
        e.preventDefault();
        navigate(route);
    }
    return (
        <nav>
            <ul>
                <li><a href="/profile" onClick={e => handleClick(e, "/profile")}>Profile</a></li>
                <li><a href="/dashboard" onClick={e => handleClick(e, "/dashboard")}>Dashboard</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;