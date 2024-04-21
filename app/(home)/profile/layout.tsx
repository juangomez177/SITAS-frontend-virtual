import Box from '@mui/material/Box';


export default async function ProfileLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <main>
            <div className="flex min-h-screen justify-center bg-gray-100">
               <Box sx={{ marginTop: "5%", marginBottom: "100px" }}>
                  <div className="px-10 sm:w-[600px]">
                     {children}
                  </div>
               </Box>
            </div>
         </main>
      </>
   )
}
