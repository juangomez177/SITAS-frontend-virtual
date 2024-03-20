"use client"

import { useParams } from "next/navigation"
import { Fragment } from "react"

export default function ListadoGestion() {
  const { id } = useParams()

  return (
    <Fragment>
      <div>Listado de Vuelos por Gestionar</div>
    </Fragment>
  )
}
