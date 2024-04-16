import { redirect } from "next/navigation";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

import Footer from "components/ui/Footer";



export default async function AuthLayout({ children }: { children: React.ReactNode }) {

   const session = {
      user: null
   };

   if (session?.user) {
      redirect('/');
   }

   return (
      <>
         <Box sx={{ width: '100%', backgroundColor: '#2196F3', position: 'absolute', top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
            <Typography variant="h2" component="div" fontSize={'30px'} sx={{ color: 'white', padding: 1 }}>
               Singapur Airlines
            </Typography>
         </Box>

         <div className="flex justify-center bg-gray-100 min-h-screen">
            <Box sx={{ backgroundColor: 'white', borderRadius: '40px', marginTop:'65px', marginBottom:'40px' }} >
               <div className="sm:w-[600px] px-10">
                  {children}
               </div>
            </Box>
         </div>

         <Footer>
            <span>Copyright © Singapur Airlines 2024</span>
         </Footer>
      </>
   );

}