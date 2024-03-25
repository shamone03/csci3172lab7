import Dashboard from "./components/client/Dashboard";
import Login from "./components/client/Login";
import Profile from "./components/client/Profile";
import Router from "./components/routing/Router";
import { loginAction } from "./controllers/login";
import { profileLoader } from "./controllers/profile";
import Outlet from "./components/routing/Outlet";
import NavBar from "./components/client/NavBar";
import { dashboardLoader } from "./controllers/dashboard";

function App() {

    const routes: Route[] = [
        {
            route: /^(\/profile|\/)$/,
            element: <Profile key={0} />,
            loader: profileLoader
        },
        {
            route: /^\/dashboard$/,
            element: <Dashboard key={1} />,
            loader: dashboardLoader
        },
        {
            route: /^\/login$/,
            element: <Login key={2} />,
            action: loginAction
        }
    ]


    return (
        <div className="App">
            <Router routes={routes} >
                <NavBar />
                <Outlet />
            </Router>
        </div>
    );
}

export default App;
