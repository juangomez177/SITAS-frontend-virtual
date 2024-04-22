import axios from "axios"

export interface FlightsResponse {
  vuelos: Flight[]
  totalItems: number
}

export interface Flight {
  id?: number
  numeroVuelo: string
  tipoVuelo: string
  idAeropuertoDestino: number
  idAeropuertoOrigen: number
  idTipoAvion: number
  fechaSalida: Date
  fechaLlegada: Date
  precio: number
  cantidadPasajeros: number
  sobretasa: number
  porcentajeImpuestos: number
}

const API_VUELOS_URL = "http://localhost:8080/api/v1/vuelos"

export const fetchAllFlights = (page: number, size: number): Promise<FlightsResponse> => {
  return axios.get<FlightsResponse>(`${API_VUELOS_URL}?page=${page}&size=${size}`).then(({ data }) => data)
}

export const createFlight = (flight: Flight): Promise<void> => {
  // TODO: Enviar token en el header
  // const headers = {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // }

  return axios
    .post<void>(
      `${API_VUELOS_URL}`,
      { ...flight },
      {
        /* headers */
      }
    )
    .then(({ data }) => data)
}
export const updateFlight = (flight: Flight): Promise<void> => {
  // TODO: Enviar token en el header
  // const headers = {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // }

  return axios
    .post<void>(
      `${API_VUELOS_URL}`,
      { ...flight },
      {
        /* headers */
      }
    )
    .then(({ data }) => data)
}
