'use client'

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { grey } from '@mui/material/colors';
import ButtonSession from "components/ui/ButtonSession"
import Navbar from "components/ui/Navbar"
import Footer from "components/ui/Footer";

export default function HomeLayout({ children, }: { children: React.ReactNode }) {

    const { data: session, status } = useSession();
    console.log(session)

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar>
                <SearchOutlinedIcon fontSize="large" sx={{ color: grey[400] }} />
                <ButtonSession path="/" content="Registrarse" />
                <ButtonSession path="/" content="Iniciar sesión" />
                <button onClick={() => signOut()} >Cerrar sesión</button>
            </Navbar>
            <main>
                {children}
            </main>
            <Footer>
                <span>Copyright © Singapur Airlines 2024</span>
            </Footer>
        </div>
    )
}