"use client"

import { Fragment, SetStateAction, useEffect, useState } from "react"

import FlightDialogs from "components/molecules/Dialog/FlightDialog"
import Filters from "components/molecules/Filters/Filters"
import Table from "components/molecules/Table/Table"

export type Action = "CREATE" | "UPDATE" | "DELETE" | ""

export type FlightOperation = {
  id: number
  action: Action
}

export default function ListadoGestion() {
  const [currentOperation, setCurrentOperation] = useState<FlightOperation>({
    id: -1,
    action: "",
  })

useEffect(() => {
  console.log("Hola mundo")
  
}, [])

  return (
    <Fragment>
      <FlightDialogs currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} />
      <Filters setCurrentOperation={setCurrentOperation} />
      <Table setCurrentOperation={setCurrentOperation} />
    </Fragment>
  )
}
