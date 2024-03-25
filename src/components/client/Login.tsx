import { useState } from "react";
import { loginAction } from "../../controllers/login";
import { useAction } from "../../hooks/useAction";
import { useNavigate } from "../../hooks/useNavigate";

function Login() {

    const submit = useAction<Awaited<ReturnType<typeof loginAction>>>();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = submit(new FormData(e.target as HTMLFormElement))
        if (result.success) {
            navigate("/");
        } else {
            setError(result.message);
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form action="post" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="firstName" id="firstName" />
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="lastName" id="lastName" />
                <label htmlFor="lastName">Last Name</label>
                <input name="email" id="email" />
                <label htmlFor="email">Email</label>
                <input type="password" name="password" id="password" />
                <label htmlFor="password">Password</label>
                <select name="season" id="season">
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                    <option value="summer">Summer</option>
                </select>
                <button type="submit" name="intent" value="submission">Submit</button>
                <p>{error}</p>
            </form>
        </>
    )
}

export default Login;