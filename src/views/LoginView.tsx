import { Link } from "react-router-dom"

function LoginView() {
    return (
        <>
            <h1 className="text-4xl text-white font-bold">Login</h1>

            <nav className="mt-10">
                <Link
                    to='/auth/register'
                    className="text-center text-white text-lg block"
                >Create account</Link>
            </nav>
        </>
    )
}

export default LoginView