"use client"

import Filters from "components/molecules/Filters/Filters"
import Table from "components/molecules/Table/Table"

import { Fragment } from "react"

export default function ListadoGestion() {
  return (
    <Fragment>
      <Filters />
      <Table />
    </Fragment>
  )
}
