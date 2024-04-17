"use client"

import { Fragment } from "react"

import Filters from "components/molecules/filters/Filters"
import Table from "components/molecules/table/Table"

export default function ListadoGestion() {
  return (
    <Fragment>
      <Filters />
      <Table />
    </Fragment>
  )
}
