import { Link } from "react-router-dom"

function LoginView() {
    return (
        <>
            <div className="text-6xl">LoginView</div>

            <nav>
                <Link to='/auth/register'>
                    Create account
                </Link>
            </nav>
        </>
    )
}

export default LoginView