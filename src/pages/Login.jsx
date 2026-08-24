
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router'
const Login = () => {

const navegacion = useNavigate()

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
const formSubmit=(data)=>{
navegacion("/")
}


  return (
    <div className='flex justify-center items-center min-h-screen bg-black p-4'>
      <article className="bg-zinc-800 w-full max-w-md rounded-2xl p-8 shadow-xl">
        <header className="text-center mb-6">
          <h1 className="text-amber-600 text-4xl font-bold">Iniciar Sesión</h1>
        </header>     
    
        <section className="flex flex-col gap-6 border-t  border-zinc-700">
          <form onSubmit={ handleSubmit(formSubmit)} 
          className="flex flex-col text-left gap-3">
            <div>
              <label className="text-amber-50 block mb-1">Correo: </label>
              <input 
                type="email"
                placeholder="tu@email.com"
                className="text-white bg-zinc-900 rounded-xl w-full px-4 py-2 border border-zinc-700 focus:outline-none focus:border-amber-500" 
                 {...register("correo",
                  {required:"El correo es obligatorio",
                    pattern:{value:/^\S+@\S+\.\S+$/,
                    message:"Formato de correo invalido"
                  }
                  })}  />
                 {errors.correo && <p className="text-red-400 text-sm mt-1">{errors.correo.message}</p>}
            </div>
            
            <div>
              <label className="text-amber-50 block mb-1">Contraseña: </label>
              <input 
                type="password"
                placeholder="••••••••••"
                className="text-white bg-zinc-900 rounded-xl w-full px-4 py-2 border border-zinc-700 focus:outline-none focus:border-amber-500"
                {...register("password",{required:"El campo es obligatorio",
                  pattern:{value:/^(?=.*[A-Z])(?=.*\d)(?=.*\W).{8}$/,
                    message:"Formato de Constraseña debe contener 8 caracteres, 1 mayuscula, 1 numero y 1 simbolo"
                    }
                })}/>
                {errors.password && <p className="text-red-400">{errors.password.message}</p>}
            </div>
            
            <div className="mt-2">
              <button type="submit" className='bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-xl p-2 w-full cursor-pointer transition-colors'>
                Iniciar
              </button>
            </div>
          </form>

          <article className="flex flex-col text-center items-center pt-4 border-t border-zinc-700">
            <div className="w-full flex flex-col gap-3">
              <h2 className="text-amber-50 text-sm">Si aun no sos Usuario, registrate</h2>
              <div>
                <button type="button"
                onClick={() => navegacion('/registro')}
                className='bg-zinc-700 hover:bg-zinc-600 text-amber-50 rounded-xl p-2 w-full cursor-pointer transition-colors'>
                  Registrate
                </button>
              </div>  
            </div>
          </article>
        </section>
      </article>
    </div>
  )
}

export default Login