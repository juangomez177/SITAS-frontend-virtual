import Footer from "components/molecules/footer/Footer"
import Navbar from "components/molecules/navbar/Navbar"

import { Fragment } from "react"

export default function GestionLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <Fragment>{children}</Fragment>

        <Footer />
      </body>
    </html>
  )
}
