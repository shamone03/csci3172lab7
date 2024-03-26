import { useEffect } from "react";
import { userLoader } from "../../controllers/profile";
import { useLoaderData } from "../../hooks/useLoaderData";
import { useNavigate } from "../../hooks/useNavigate";

function Profile() {
    const user = useLoaderData<ReturnType<typeof userLoader>>();

    const navigate = useNavigate();
    useEffect(() => {
        if (!user.success) {
            navigate("/login");
        }
    });

    return (
        <div className="d-flex d-flex-col justify-content-center align-items-center">
            <h1>Profile</h1>
            <h2>Hello {user.data.firstName + " " + user.data.lastName}</h2>
            <h3>Your registered email is {user.data.email}</h3>
            <h3>It's not {user.data.season} yet : (</h3>
        </div>
    )
}

export default Profile;