import { useLocation } from "../../hooks/useLocation";
import ClientLink from "../routing/ClientLink";

function NavBar() {
    const location = useLocation();

    return (
        <>
            {location !== "/login" && (
                <nav className="d-flex d-flex-row justify-content-center align-items-center gap-2">
                     <ClientLink to="/profile">Profile</ClientLink>
                     <ClientLink to="/dashboard">Dashboard</ClientLink>
                     <ClientLink to="/login" onClick={() => localStorage.clear()}>Logout</ClientLink>
                </nav>
            )}
        </>
    )
}

export default NavBar;