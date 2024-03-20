import { Fragment } from "react"

export default function GestionLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h3>Barra de navegación</h3>
        <Fragment>{children}</Fragment>
        <h3>Footer</h3>
      </body>
    </html>
  )
}
