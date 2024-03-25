import { useState } from "react";
import { profileLoader } from "../controllers/profile";
import { useLoaderData } from "../hooks/useLocationData";

function Profile() {
    const state = useLoaderData<ReturnType<typeof profileLoader>>();

    const [count, setCount] = useState(state ?? 0);

    return (
        <>
            <h1>Profile</h1>
            <button onClick={() => setCount(i => i + 1)}>{count}</button>
        </>
    )
}

export default Profile;