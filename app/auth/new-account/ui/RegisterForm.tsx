"use client";

import clsx from 'clsx';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import TextField from '@mui/material/TextField';


type FormInputs = {
   name: string;
   email: string;
   password: string;
}

export const RegisterForm = () => {

   const [errorMessage, setErrorMessage] = useState('')
   const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

   const onSubmit: SubmitHandler<FormInputs> = async (data) => {
      setErrorMessage('');
      window.location.replace('/');
   }


   return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">



         <label htmlFor="email">Nombre completo</label>
         <input
            className={
               clsx(
                  "px-5 py-2 border bg-gray-200 rounded mb-5",
                  {
                     'border-red-500': errors.name
                  }
               )
            }
            type="text"
            autoFocus
            {...register('name', { required: true })}
         />

         <label htmlFor="email">Correo electrónico</label>
         <input
            className={
               clsx(
                  "px-5 py-2 border bg-gray-200 rounded mb-5",
                  {
                     'border-red-500': errors.email
                  }
               )
            }
            type="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
         />

         <label htmlFor="email">Contraseña</label>
         <input
            className={
               clsx(
                  "px-5 py-2 border bg-gray-200 rounded mb-5",
                  {
                     'border-red-500': errors.password
                  }
               )
            }
            type="password"
            {...register('password', { required: true, minLength: 6 })}
         />


         <span className="text-red-500">{errorMessage} </span>



         <button className="bg-blue-500 text-center rounded h-10 mb-3 flex items-center justify-center text-white">Crear cuenta</button>

         <Link href="/auth/login" className='underline text-center'>
            Ya tienes una cuenta? Inicia sesión
         </Link>
      </form>
   );
};
