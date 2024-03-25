import { createContext } from "react";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import { profileLoader } from "./controllers/profile";
import Login from "./components/Login";
import { loginAction } from "./controllers/login";

const routes: { route: RegExp, element: JSX.Element, loader?: () => any, action?: (request: Request) => void }[] = [
    {
        route: /^(\/profile|\/)$/,
        element: <Profile key={0} />,
        loader: profileLoader
    },
    {
        route: /^\/dashboard$/,
        element: <Dashboard key={1} />,
    },
    {
        route: /\/^login$/,
        element: <Login key={2} />,
        action: loginAction
    }
]

export const LocationContext = createContext(routes);