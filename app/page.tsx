
"use client";

import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"
import { error } from "console"
import {useFetch} from "../app/useFetch";
import Navbar from "../components/Navbar";
import Busqueda from "../components/Busqueda";

type aeropuerto = {
  nombre: string;
  idCiudad:{
    id:number;
    nombre:string;
    idPais:number;
  };
  id: string;
  };


export default function Web() {
  const {Data}=useFetch();
  return (
    <>
    <Navbar />
    
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              
              Pagina de Prueba 
            </h1>


          </div>
        </div>
      </section>
      <Busqueda />
      {Data?.map((aeropuerto:aeropuerto)=>(
        <li key={aeropuerto.nombre}>{aeropuerto.nombre}</li>
      ))}
      
    </>
  )
}
