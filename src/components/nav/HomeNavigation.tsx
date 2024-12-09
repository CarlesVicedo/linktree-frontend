import { Link } from "react-router-dom"

const HomeNavigation = () => {
    return (
        <>
            <Link
                className="text-white uppercase font-black text-xs cursor-pointer p-2"
                to='/auth/login'
            >Login</Link>

            <Link
                className="bg-lime-500 text-slate-800 uppercase font-black text-xs cursor-pointer rounded-lg p-2"
                to='/auth/register'
            >Sign in</Link>
        </>
    )
}

export default HomeNavigation