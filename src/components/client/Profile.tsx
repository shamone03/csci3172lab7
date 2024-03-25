import { useEffect } from "react";
import { profileLoader } from "../../controllers/profile";
import { useLoaderData } from "../../hooks/useLoaderData";
import { useNavigate } from "../../hooks/useNavigate";

function Profile() {
    const state = useLoaderData<ReturnType<typeof profileLoader>>();
    console.log(state);
    const navigate = useNavigate();
    useEffect(() => {
        if (!state.success) {
            navigate("/login");
        }
    });

    return (
        <>
            <h1>Profile</h1>
            {JSON.stringify(state.data)}
        </>
    )
}

export default Profile;