import { useEffect } from "react";
import { useNavigate } from "../../hooks/useNavigate";
import { userLoader } from "../../controllers/profile";
import { useLoaderData } from "../../hooks/useLoaderData";

function Dashboard() {
    const user = useLoaderData<ReturnType<typeof userLoader>>();

    const navigate = useNavigate();
    useEffect(() => {
        if (!user.success) {
            navigate("/login");
        }
    });

    return (
        <div className="d-flex d-flex-col justify-content-center align-items-center">
            <h1>{user.data.firstName + " " + user.data.lastName}'s Dashboard</h1>
            <h3>The weather is now {user.data.season}</h3>
        </div>
    )
}

export default Dashboard;