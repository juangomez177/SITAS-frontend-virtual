import { RegisterForm } from './ui/RegisterForm';

export default function NewAccountPage() {
   return (
      <div>
         <h1 className={`text-4xl mb-1 mt-5`}>¡Crea tu cuenta!</h1>
         <span className='text-xs'>Se parte de la familia Singapur Airlines y vuela a cientos de destinos.</span>
         <RegisterForm />
      </div>
   );
}
