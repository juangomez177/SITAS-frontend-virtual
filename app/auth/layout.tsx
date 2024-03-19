import { redirect } from "next/navigation";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";


export default async function AuthLayout({ children }: { children: React.ReactNode }) {

   const session = {
      user: null
   };

   if (session?.user) {
      redirect('/');
   }

   return (
      <main className="flex justify-center bg-gray-100">

         <Box sx={{ width: '100%', backgroundColor: '#2196F3', position: 'absolute', top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
            <Typography variant="h2" component="div" fontSize={'44px'} sx={{ color: 'white', padding: 1 }}>
               Singapur Airlines
            </Typography>
         </Box>

         <Box sx={{ backgroundColor: 'white', borderRadius: '40px', marginTop: '100px', marginBottom: '100px'}} height='auto' >
            <div className="w-full md:w-[700px] px-10">
               {children}
            </div>
         </Box>


         <Box sx={{ width: '100%', backgroundColor: '#2196F3', position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
            <Typography variant="h2" component="div" fontSize={'20px'} sx={{ color: 'white', padding: 1 }}>
               Copyright © Singapur Airlines 2024
            </Typography>
         </Box>

      </main >
   );

}