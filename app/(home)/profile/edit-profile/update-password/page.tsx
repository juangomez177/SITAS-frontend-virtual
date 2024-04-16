import Box from "@mui/material/Box"
import UpdatePasswordForm from "./ui/UpdatePasswordForm"

function UpdatePassword({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <div className="flex min-h-screen justify-center bg-gray-100">
          <Box sx={{ marginTop: "10%", marginBottom: "100px" }}>
            <div className="px-10 sm:w-[600px]">
              <h1 className={`mb-1 mt-5 text-4xl`}>Actualizar contraseña</h1>
              <span className="text-x!  pb-3">¡Comienza a editar el perfil de tu cuenta de Singapur Airlines!</span>
              <UpdatePasswordForm />
            </div>
          </Box>
        </div>
      </main>
    </>
  )
}

export default UpdatePassword
