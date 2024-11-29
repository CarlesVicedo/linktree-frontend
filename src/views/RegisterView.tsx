import { Link } from "react-router-dom"

function RegisterView() {
    return (
        <>
            <h1 className="text-4xl text-white font-bold">Create account</h1>

            <nav className="mt-10">
                <Link
                    to='/auth/login'
                    className="text-center text-white text-lg block"
                >Log in here</Link>
            </nav>
        </>
    )
}

export default RegisterView