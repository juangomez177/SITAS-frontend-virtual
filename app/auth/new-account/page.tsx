import { RegisterForm } from './ui/RegisterForm';

export default function NewAccountPage() {
   return (
      <div className="flex flex-col">

         <h1 className={`text-4xl mb-5 mt-5`}>Nueva cuenta</h1>

         <RegisterForm />
      </div>
   );
}
