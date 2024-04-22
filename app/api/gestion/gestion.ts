import axios from "axios"

export interface Flight {
  id: number
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

export const fetchAllFlights = (page: number, size: number): Promise<Flight[]> => {
  return axios.get(`http://localhost:8080/api/v1/vuelos?page=${page}&size=${size}`).then(({ data }) => data)
}
