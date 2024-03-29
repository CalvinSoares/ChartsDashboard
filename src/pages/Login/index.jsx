import login from '../../assets/login.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isAuthenticated = formData.username !== '' && formData.password !== '';

        if (isAuthenticated) {
            navigate('/dashboard');
        } else {
            alert('Por favor, insira seu usuário e senha.');
        }
    };

    return (
        <section className="h-screen bg-[#242424]">
            <div className="container h-full px-6 py-24">
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img src={login} className="w-full" alt="Phone image" />
                    </div>
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder='Digite seu usuário..'
                                    className="mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b text-gray-200"
                                    autoComplete="username"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder='Digite sua senha..'
                                    className="mb-6 w-full mt-2 h-12 px-4 bg-transparent border-b outiline-none text-gray-200"
                                    autoComplete="current-password"
                                />
                            </div>
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
                                onClick={() => navigate('/signup')}
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
