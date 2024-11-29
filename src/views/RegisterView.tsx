import { Link } from "react-router-dom"

function RegisterView() {
    return (
        <>
            <div>RegisterView</div>

            <nav>
                <Link to='/auth/login'>
                    Log in here
                </Link>
            </nav>
        </>
    )
}

export default RegisterView