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
            <form id="login-form" action="post" onSubmit={(e) => handleSubmit(e)} className="d-flex d-flex-col gap-1 align-items-center">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" />
                <label htmlFor="email">Email</label>
                <input name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <label htmlFor="season">Season</label>
                <select name="season" id="season">
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                    <option value="summer">Summer</option>
                </select>
                <button type="submit" className="btn">Submit</button>
            </form>
            <div>
                <p>{error}</p>
            </div>
        </>
    )
}

export default Login;