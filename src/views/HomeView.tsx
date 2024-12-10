import Header from "../components/Header"
import SearchForm from "../components/SearchForm"

const HomeView = () => {
    return (
        <>
            <Header />

            <main className="bg-gray-100 py-10 min-h-screen lg:bg-home bg-no-repeat bg-right-top lg:bg-home-xl">
                <div className="max-w-5xl mx-auto mt-10" >
                    <div className="lg:w-1/2  px-10 lg:p-0 space-y-6" >
                        <h1 className="text-6xl font-black" >
                            All your <span className="text-cyan-400">Social Networks</span> in one link
                        </h1>

                        <p className="text-slate-800 text-xl">Join more than 200k developers sharing their social networks. Share your GitHub, LinkedIn and many more.</p>

                        <SearchForm />
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomeView