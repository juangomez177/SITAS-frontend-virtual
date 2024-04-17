import { FlightOperation } from "app/gestion/lista/page"
import React, { Dispatch, SetStateAction } from "react"

type FiltersProps = {
  setCurrentOperation: Dispatch<SetStateAction<FlightOperation>>
}

const Filters: React.FC<FiltersProps> = ({ setCurrentOperation }) => {
  const handleCreateFlight = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault()
    setCurrentOperation({
      id: -1,
      action: "CREATE",
    })
  }

  return (
    <React.Fragment>
      <section className="mx-auto rounded-md bg-white px-20  py-5 dark:bg-gray-800">
        <form>
          <div className="mt-4 grid grid-cols-1 gap-10 px-5 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="no-vuelo">
                No Vuelo
              </label>
              <input
                id="no-vuelo"
                type="text"
                className="focus:ring-opacity-40/40 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="tipo-vuelo">
                Tipo de Vuelo
              </label>
              <input
                id="tipo-vuelo"
                type="email"
                className="focus:ring-opacity-40/40 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="ciudad-origen">
                Ciudad de Orígen
              </label>
              <input
                id="ciudad-origen"
                type="text"
                className="focus:ring-opacity-40/40 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="ciudad-destino">
                Ciudad de Destino
              </label>
              <input
                id="ciudad-destino"
                type="text"
                className="focus:ring-opacity-40/40 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3 px-6">
            <button className="rounded-full bg-gray-700 px-8 py-2.5 leading-5 text-white transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Buscar
            </button>
            <button
              onClick={handleCreateFlight}
              className="rounded-full bg-gray-700 px-8 py-2.5 leading-5 text-white transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
            >
              Crear vuelo
            </button>
          </div>
        </form>
      </section>
    </React.Fragment>
  )
}

export default Filters
