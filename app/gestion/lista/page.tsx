"use client"

import Filters from "components/molecules/filters/Filters"
import Table from "components/molecules/table/Table"

import { Fragment } from "react"

export default function ListadoGestion() {
  return (
    <Fragment>
      <Filters />
      <Table />
    </Fragment>
  )
}
