import { useEffect, useState } from "react";
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
    
    const [user, setUser] = useState(state.data);

    return (
        <>
            <h1>Profile</h1>
            {JSON.stringify(user)}        
        </>
    )
}

export default Profile;