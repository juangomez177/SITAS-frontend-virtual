
import Box from "@mui/material/Box"
import UpdateForm from "./ui/UpdateForm"

function EditProfile({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <div className="flex min-h-screen justify-center bg-gray-100">
          <Box sx={{ marginTop: "10%", marginBottom: "100px" }}>
            <div className="px-10 sm:w-[600px]">
              <h1 className={`mb-1 mt-5 text-4xl`}>Actualizar datos</h1>
              <span className="text-x!">¡Comienza a editar el perfil de tu cuenta de Singapur Airlines!</span>
              <UpdateForm />
            </div>
          </Box>
        </div>
      </main>
    </>
  )
}

export default EditProfile
