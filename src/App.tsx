import { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationContext";

function App() {

    const routes = useContext(LocationContext);
    
    const [currentLocation, setCurrentLocation] = useState(window.location.pathname);
    useEffect(() => {
        console.log(window.location.pathname);
        const navigate = () => {
            setCurrentLocation(window.location.pathname);
        }
        window.addEventListener('popstate', navigate);
        return () => window.removeEventListener('popstate', navigate);
    }, []);


    const navigate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, route: string) => {
        e.preventDefault()
        window.history.pushState({}, "", route);
        setCurrentLocation(route);
    }

    return (
        <div className="App">
            <nav>
                <ul>
                    <li><a onClick={(e) => navigate(e, "/profile")} href="profile">Profile</a></li>
                    <li><a onClick={(e) => navigate(e, "/dashboard")} href="dashboard">Dashboard</a></li>
                </ul>
            </nav>
            <div>
                {routes.filter(i => i.route.test(currentLocation)).map(i => i.element)}
            </div>
        </div>
    );
}

export default App;
