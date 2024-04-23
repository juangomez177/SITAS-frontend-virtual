import React from "react";
import UpdateForm from "./ui/UpdateForm"
import { Titles } from "components/ui/Titles"

const EditProfile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Titles title="Actualizar datos" subtitle="¡Comienza a editar el perfil de tu cuenta de Singapur Airlines!" />
      <UpdateForm />
    </>
  )
}

export default EditProfile; 

