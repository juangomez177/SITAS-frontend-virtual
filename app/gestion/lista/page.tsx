"use client"

import { Fragment, useEffect, useState } from "react"

import { toast, ToastContainer } from "react-toastify"

import { Flight, fetchAllFlights } from "app/api/gestion/gestion"
import FlightDialogs from "components/molecules/Dialog/FlightDialog"
import Filters from "components/molecules/Filters/Filters"
import Table from "components/molecules/Table/Table"

export type Action = "CREATE" | "UPDATE" | "DELETE" | ""

export type FlightOperation = {
  id: number
  action: Action
}

export default function ListadoGestion() {
  const [flights, setFlights] = useState<Flight[]>([])
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
  })
  const { page, size } = pagination
  const [currentOperation, setCurrentOperation] = useState<FlightOperation>({
    id: -1,
    action: "",
  })

  useEffect(() => {
    fetchAllFlights(page, size)
      .then((flights) => {
        setFlights(flights)
      })
      .catch((error) => {
        toast.error(`Error al cargar los vuelos ${error.message}`)
      })
  }, [page, size])

  return (
    <Fragment>
      <ToastContainer />
      <FlightDialogs currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} />
      <Filters setCurrentOperation={setCurrentOperation} />
      <Table
        flights={flights}
        setCurrentOperation={setCurrentOperation}
        pagination={pagination}
        setPagination={setPagination}
      />
    </Fragment>
  )
}
