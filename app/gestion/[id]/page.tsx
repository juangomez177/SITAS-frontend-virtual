"use client"

import { useParams } from "next/navigation"

import { Fragment } from "react"

export default function DetalleGestion() {
  const { id } = useParams()

  return (
    <Fragment>
      <div>Detalle del vuelo {id}</div>
    </Fragment>
  )
}
