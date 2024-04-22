"use client"

import { Fragment, useEffect, useState } from "react"

import { toast, ToastContainer } from "react-toastify"

import { fetchAllFlights, FlightsResponse } from "app/api/gestion/gestion"
import FlightDialogs from "components/molecules/Dialog/FlightDialog"
import Filters from "components/molecules/Filters/Filters"
import Table from "components/molecules/Table/Table"

export type Action = "CREATE" | "UPDATE" | "DELETE" | ""

export type FlightOperation = {
  id: number
  action: Action
}

export default function ListadoGestion() {
  const [flightsResponse, setFlightsResponse] = useState<FlightsResponse>({
    vuelos: [],
    totalItems: 0,
  })
  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
  })
  const { page, size } = pagination
  const [currentOperation, setCurrentOperation] = useState<FlightOperation>({
    id: -1,
    action: "",
  })

  const handleFetchFlights = () => {
    fetchAllFlights(page - 1, size)
      .then((flights) => {
        console.log({ flights })
        setFlightsResponse(flights)
      })
      .catch((error) => {
        toast.error(`Error al cargar los vuelos ${error.message}`)
      })
  }

  useEffect(() => {
    handleFetchFlights()
  }, [page, size])

  return (
    <Fragment>
      <ToastContainer />
      <FlightDialogs
        syncFlights={handleFetchFlights}
        currentOperation={currentOperation}
        setCurrentOperation={setCurrentOperation}
      />
      <Filters setCurrentOperation={setCurrentOperation} />
      <Table
        flightsResponse={flightsResponse}
        setCurrentOperation={setCurrentOperation}
        pagination={pagination}
        setPagination={setPagination}
      />
    </Fragment>
  )
}
