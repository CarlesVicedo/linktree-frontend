import { Link, useLocation } from "react-router-dom"
import { useForm } from "react-hook-form"
import { isAxiosError } from 'axios'
import ErrorMessage from "../components/ErrorMessage"
import { RegisterForm } from "../types"
import { toast } from "sonner"
import api from "../config/axios"

function RegisterView() {
    const location = useLocation()

    const initialValues: RegisterForm = {
        name: '',
        email: '',
        handle: location.state?.handle || '',
        password: '',
        password_confirmation: ''
    }

    const { register, watch, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialValues })

    const password = watch('password')

    const handleRegister = async (formData: RegisterForm) => {
        try {
            const { data } = await api.post('/auth/register', formData)
            toast.success(data)
            reset()

        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data.error)
            }
        }
    }

    return (
        <>
            <h1 className="text-4xl text-white font-bold">Create account</h1>

            <form
                onSubmit={handleSubmit(handleRegister)}
                className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
            >
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="name" className="text-2xl text-slate-500">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('name', {
                            required: 'Name is mandatory'
                        })}
                    />

                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Register e-mail"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('email', {
                            required: 'E-mail is mandatory',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "E-mail format not valid.",
                            },
                        })}
                    />

                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="handle" className="text-2xl text-slate-500">Handle</label>
                    <input
                        id="handle"
                        type="text"
                        placeholder="User name without spaces"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('handle', {
                            required: 'Handle is mandatory'
                        })}
                    />

                    {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}

                </div>
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Register password"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password', {
                            required: 'Password is mandatory',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long'
                            }
                        })}
                    />

                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

                </div>

                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Rpeat Password</label>
                    <input
                        id="repeat-password"
                        type="password"
                        placeholder="Repeat Password"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password_confirmation', {
                            required: 'Repeating password is mandatory',
                            validate: (value) => value === password || 'Password does not match'
                        })}
                    />

                    {errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>}

                </div>

                <input
                    type="submit"
                    className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                    value='Create Account'
                />
            </form>

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