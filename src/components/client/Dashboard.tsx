import { dashboardLoader } from "../../controllers/dashboard";
import { useLoaderData } from "../../hooks/useLoaderData";

function Dashboard() {
    const data = useLoaderData<ReturnType<typeof dashboardLoader>>();

    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}

export default Dashboard;