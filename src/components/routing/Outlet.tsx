import { useContext } from "react";
import { LocationDataContext } from "../../contexts/LocationDataContext";
import { LocationContext } from "../../contexts/LocationContext";

function Outlet() {

    const routes = useContext(LocationDataContext);
    const { location } = useContext(LocationContext);
    return (
        <>
            {routes.filter(i => i.route.test(location)).map(i => i.element)}
        </>
    )
}

export default Outlet;