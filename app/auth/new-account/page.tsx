import { RegisterForm } from './ui/RegisterForm';

export default function NewAccountPage() {
   return (
      <div className="flex flex-col">
         <h1 className={`text-2xl mb-1 mt-5`}>¡Crea tu cuenta!</h1>
         <span className='text-xs'>Se parte de la familia Singapur Airlines y vuela a cientos de destinos.</span>
         <RegisterForm />
      </div>
   );
}
