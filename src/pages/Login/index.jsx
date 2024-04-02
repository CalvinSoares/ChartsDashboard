import login from '../../assets/login.svg'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm()

    const onSubmit = async (values) => {
        const loginUser = async () => { 
            console.log('values: ', values)
            try {
                const responseApi = await axios.post(
                    'http://localhost:3000/auth/login',
                    values
                )
                signIn({
                    auth: {
                        token: responseApi.data.token,
                        type: "Bearer",
                        expiresIn: 3600
                    },
                    userState: values
                })

                navigate('/dashboard');
            } catch (err) {
                if (err && err instanceof AxiosError) {
                  toast.error('Erro no login', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light'
                  })
                } else if (err && err instanceof Error) {
                  toast.error('Erro no login', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light'
                  })
                }
              }
        }
        loginUser()
    }


    return (
        <section className="h-screen bg-[#242424]">
            <div className="container h-full px-6 py-24">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="mb-12 md:mb-0 md:w-6/12 lg:w-6/12">
                        <img src={login} className="w-full" alt="Phone image" />
                    </div>
                    <div className="md:w-6/12 lg:ml-6 lg:w-5/12">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-wrap items-center justify-center font-poppins mb-12'>
                                <h1 className='text-white text-4xl'>Login</h1>
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email"                              
                                placeholder='Digite seu e-mail..'
                                autoComplete="email"
                                className="mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b text-gray-200"
                                {...register('email', { required: true })}

                            />
                            {errors.email && <p className="text-black">Campo obrigatório</p>}

                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Digite sua senha..'
                                autoComplete="current-password"
                                className="mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b text-gray-200"
                                {...register('password', { required: true })}

                            />
                            {errors.password && <p className="text-black">Campo obrigatório</p>}

                            <div className="w-full">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-emerald-400 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black"
                                >
                                    Logar
                                </button>
                            </div>
                        </form>
                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                OR
                            </p>
                        </div>
                        <div className="w-full">
                            <button
                                onClick={() => navigate('/register')}
                                className="inline-block w-full rounded bg-fuchsia-400 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black"
                            >
                                Cadastre-se
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
