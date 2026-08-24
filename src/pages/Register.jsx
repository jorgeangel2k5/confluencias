import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router'

const Register = () => {
  const navegacion = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    mode: "onSubmit" 
  })

  // 
  const onSubmit = (data) => {
    console.log("Datos válidos enviados:", data)
    navegacion("/login")
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-black p-4'>
      <article className="bg-zinc-800 w-full max-w-md rounded-2xl p-8 shadow-xl">
        <header className="text-center mb-6">
          <h1 className="text-amber-600 text-4xl font-bold">Registro</h1>
        </header>     

        <section>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col text-left gap-3">
            
            
            <div>
              <label className="text-amber-50 block mb-1">Nombre: </label>
              <input 
                type="text"
                placeholder="Tu nombre"
                className="text-white bg-zinc-900 rounded-xl w-full px-4 py-2 border border-zinc-700 focus:outline-none focus:border-amber-500" 
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  pattern: {
                    value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]{2,50}$/,
                    message: "El nombre solo debe contener letras y tener entre 2 y 50 caracteres"
                  }
                })}
              />
              {errors.nombre && <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>}
            </div>

            
            <div>
              <label className="text-amber-50 block mb-1">Apellido: </label>
              <input 
                type="text"
                placeholder="Tu apellido"
                className="text-white bg-zinc-900 rounded-xl w-full px-4 py-2 border border-zinc-700 focus:outline-none focus:border-amber-500" 
                {...register("apellido", {
                  required: "El apellido es obligatorio",
                  pattern: {
                    value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]{2,50}$/,
                    message: "El apellido solo debe contener letras y tener entre 2 y 50 caracteres"
                  }
                })}
              />
              {errors.apellido && <p className="text-red-400 text-sm mt-1">{errors.apellido.message}</p>}
            </div>

            <div>
              <label className="text-amber-50 block mb-1">Correo: </label>
              <input 
                type="email"
                placeholder="Ingrese su correo"
                className="text-white bg-zinc-900 rounded-xl w-full px-4 py-2 border border-zinc-700 focus:outline-none focus:border-amber-500"
                {...register("correo", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Formato de correo inválido"
                  }
                })} 
              />
              {errors.correo && <p className="text-red-400 text-sm mt-1">{errors.correo.message}</p>}
            </div>

           
            <div>
              <label className="text-amber-50 block mb-1">Contraseña: </label>
              <input 
                type="password"
                placeholder="••••••••••"
                className="text-white bg-zinc-900 rounded-xl w-full px-4 py-2 border border-zinc-700 focus:outline-none focus:border-amber-500"
                {...register("password", {
                  required: "El campo es obligatorio",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/,
                    message: "Debe contener al menos 8 caracteres, 1 mayúscula, 1 número y 1 símbolo"
                  }
                })}
              />
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <div className="mt-2">
              <button 
                type="submit" 
                className='bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-xl p-2 w-full cursor-pointer transition-colors'
              >
                Registrar
              </button>
            </div>

          </form>
        </section>
      </article>
    </div>
  )
}

export default Register