import register from '../../assets/register.svg'
import Input from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import axios from 'axios'

const Register = () => {
    
    const navigate = useNavigate()

    const form = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Campo Obrigatório'),
            name: Yup.string().required('Campo obrigatório'),
            password: Yup.string().required('Campo obrigatório')
        }),
        onSubmit: (values) => {
            postCreateUser({
                email: values.email,
                name: values.name,
                password: values.password
            })
        }
    })

    const checkErrorInput = (nameField) => {
        const isChanged = nameField in form.touched
        const isInvalid = nameField in  form.errors
        const hasError = isChanged && isInvalid

        return hasError
    }

    const postCreateUser = async (data) => {
        try {
            const res = await axios.post(
                'http://localhost:3000/auth/register',
                data
            )
            console.log(res);
            if (res.data.success) {
                toast.success('Conta cadastrada com sucesso', {
                    position: 'top-right',
                    autoClose: 2000
                  })
    
            }
            navigate('/login')
        } catch (err) {
            if (err.response.data.error === 'email_exists') {
                toast.error('O email já existe', {
                  position: 'top-right',
                  autoClose: 2000
                })
              } else {
                toast.error('Erro ao enviar os dados!', {
                  position: 'top-right',
                  autoClose: 2000
                })
              }
        }
    }


  return (
    <section className="bg-[#242424] w-screen h-screen">
      <div className='container h-full px-6 py-6'>
        <div className='flex h-full flex-wrap items-center justify-center lg:justify-between'>
            <div className='mb-12 md:mb-0 md:w-6/12 lg:w-6/12'> 
                <img src={register} className="w-full" alt="" />
            </div>
        <div className=' md:w-6/12 lg:ml-6 lg:w-5/12'>
            <form onSubmit={form.handleSubmit}>
                <div className='flex flex-wrap items-center justify-center font-poppins mb-12'>
                    <h1 className='text-white text-4xl'>Cadastro</h1>
                </div>             
                <Input 
                    type="text" 
                    name="name"
                    id="name"
                    className={`${checkErrorInput('name') ? 'border-red-500 border-2' : ''}`}
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder="Nome Completo" 
                />
                {checkErrorInput('name') && (
                    <p className="text-red-500 text-sm mt-1">
                        {form.errors.name}
                    </p>
                )}
                <Input
                    type="email"
                    name="email"
                    id="email"
                    className={`${checkErrorInput('email') ? 'border-red-500 border-2' : ''}`}
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder='Digite seu e-mail..'
                    autoComplete="email"
                />
                {checkErrorInput('email') && (
                    <p className="text-red-500 text-sm mt-1">
                        {form.errors.email}
                    </p>
                )}
                <Input
                    type="password"
                    name="password"
                    id="password"
                    className={`${checkErrorInput('password') ? 'border-red-500 border-2' : ''}`}
                    value={form.values.password}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder='Digite sua senha..'
                    autoComplete="current-password"
                />
                {checkErrorInput('password') && (
                    <p className="text-red-500 text-sm mt-1">
                        {form.errors.password}
                    </p>
                )}
                <div className="w-full">
                    <button
                        type="submit"
                        className="inline-block w-full rounded bg-emerald-400 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black"
                    >
                        Cadastrar
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
                            onClick={() => navigate('/')}
                            className="inline-block w-full rounded bg-fuchsia-400 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black"
                        >
                            Login
                        </button>
                    </div>
                </div> 
            </div>      
      </div>
    </section>
  )
}

export default Register
