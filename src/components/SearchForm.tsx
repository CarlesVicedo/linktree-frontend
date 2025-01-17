import { useForm } from "react-hook-form"
import slugify from 'react-slugify'
import ErrorMessage from "./ErrorMessage"
import { useMutation } from "@tanstack/react-query"
import { searchByHandle } from "../api/LinkTreeAPI"
import { Link } from "react-router-dom"

const SearchForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            handle: ''
        }
    })

    const mutation = useMutation({
        mutationFn: searchByHandle,
    })

    const handle = watch('handle')
    const slug = slugify(handle)

    const handleSearch = () => {
        mutation.mutate(slug)
    }

    return (
        <form
            onSubmit={handleSubmit(handleSearch)}
            className="space-y-5">
            <div className="relative flex items-center  bg-white  px-2">
                <label
                    htmlFor="handle"
                >linktree.com/</label>
                <input
                    type="text"
                    id="handle"
                    className="border-none bg-transparent p-2 focus:ring-0 flex-1"
                    placeholder="elonmusk, zuck, jeffbezos"
                    {...register("handle", {
                        required: "User name is mandatory",
                    })}
                />

            </div>
            {errors.handle && (
                <ErrorMessage>{errors.handle.message}</ErrorMessage>
            )}

            <div className="mt-10">
                {mutation.isPending && <p className="text-center" >Loading...</p>}
                {mutation.error && <p className="text-center text-red-600 font-black" >{mutation.error.message}</p>}
                {mutation.data && <><p className="text-center text-cyan-500 font-black" >{mutation.data}</p> <p className="text-center font-black"><Link to={'/auth/register'} state={{ handle: slug }} >Click here to sign in</Link></p></>}
            </div>

            <input
                type="submit"
                className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                value='Get my LinkTree'
            />
        </form>
    )
}

export default SearchForm