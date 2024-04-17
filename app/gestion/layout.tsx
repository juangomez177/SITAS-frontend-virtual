import Footer from "components/molecules/Footer/Footer"
import Navbar from "components/molecules/Navbar/Navbar"

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
