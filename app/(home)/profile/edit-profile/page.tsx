import React from "react";
import UpdateForm from "./ui/UpdateForm"
import { Titles } from "components/ui/Titles"

export function EditProfile({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Titles title="Actualizar datos" subtitle="¡Comienza a editar el perfil de tu cuenta de Singapur Airlines!" />
      <UpdateForm />
    </>
  )
}
export default EditProfile;

