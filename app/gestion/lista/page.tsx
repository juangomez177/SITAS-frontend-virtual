"use client"
import { Fragment } from "react"

import Filters from "components/molecules/Filters/Filters"
import Table from "components/molecules/Table/Table"

export default function ListadoGestion() {
  return (
    <Fragment>
      <Filters />
      <Table />
    </Fragment>
  )
}
