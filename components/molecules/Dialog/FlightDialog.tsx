import React, { Dispatch, SetStateAction } from "react"

import { FlightOperation } from "app/gestion/lista/page"
import CancelFlightDialog from "./CancelFlightDialog"
import CreateFlightDialog from "./CreateFlightDialog"

type FlightDialogsProps = {
  currentOperation: FlightOperation
  setCurrentOperation: Dispatch<SetStateAction<FlightOperation>>
  syncFlights: () => void
}

const FlightDialogs: React.FC<FlightDialogsProps> = (props) => {
  const { currentOperation, setCurrentOperation, syncFlights } = props
  const { id, action } = currentOperation

  if (action === "") return <></>

  if (action === "CREATE") {
    return <CreateFlightDialog syncFlights={syncFlights} action="CREATE" setCurrentOperation={setCurrentOperation} />
  }

  if (action === "UPDATE") {
    return (
      <CreateFlightDialog syncFlights={syncFlights} action="UPDATE" setCurrentOperation={setCurrentOperation} id={id} />
    )
  }

  if (action === "DELETE") {
    return <CancelFlightDialog syncFlights={syncFlights} id={id} setCurrentOperation={setCurrentOperation} />
  }

  return <></>
}

export default FlightDialogs
