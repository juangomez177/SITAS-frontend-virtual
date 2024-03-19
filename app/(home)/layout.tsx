import ButtonSession from "components/ui/ButtonSession"
import Navbar from "components/ui/Navbar"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { grey } from '@mui/material/colors';
import Footer from "components/ui/Footer";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <>
        <Navbar>
            <SearchOutlinedIcon fontSize="large" sx={{ color: grey[400]}}/>
            <ButtonSession path="/" content="Registrarse"/>
            <ButtonSession path="/" content="Iniciar sesión"/>
        </Navbar>
        <main>
            {children}
        </main>
        <Footer>
            <span>Copyright © Singapur Airlines 2024</span>
        </Footer>
        </>
    )
}