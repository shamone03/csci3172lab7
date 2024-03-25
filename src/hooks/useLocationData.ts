import { useContext } from "react";
import { LocationContext } from "../LocationContext";

export function useLoaderData<T>(): T | undefined {
    const routes = useContext(LocationContext);
    const location = routes.find(i => i.route.test(window.location.pathname));
    if (!location) {
        throw new Error(`invalid location ${window.location.pathname} not found in routes`);
    }
    return location.loader ? location.loader() : undefined
}