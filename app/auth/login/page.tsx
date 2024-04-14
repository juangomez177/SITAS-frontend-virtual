import { LoginForm } from "./ui/LoginForm";

export default function LoginPage() {
   return (
      <div>
         <h1 className={`text-4xl mb-1 mt-5`}>¡Inicio de Sesión!</h1>
         <span className='text-xs'>
            Ingresa a tu cuenta de Singapur Airlines para disfrutar de todos nuestros servicios
            y reservar tus próximos vuelos a cientos de destinos emocionantes.
         </span>
         <LoginForm />
      </div>
   )
}