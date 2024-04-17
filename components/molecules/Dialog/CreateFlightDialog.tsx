import { FlightOperation } from "app/gestion/lista/page"
import React, { Dispatch, SetStateAction } from "react"

type CreateFlightDialogProps = {
  action: "CREATE" | "UPDATE"
  id?: number
  setCurrentOperation: Dispatch<SetStateAction<FlightOperation>>
}

const CreateFlightDialog: React.FC<CreateFlightDialogProps> = ({ id, action, setCurrentOperation }) => {
  const handleCancelAction = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault()
    setCurrentOperation({
      id: -1,
      action: "",
    })
  }

  const handleSubmit = () => {
    if (action === "CREATE") {
      // Create flight

      return
    }

    if (action === "UPDATE") {
      // Update flight
    }
  }

  return (
    <React.Fragment>
      <div className="relative flex justify-center">
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>

            <div className="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-xl sm:p-6 sm:align-middle">
              <h3 className="text-lg font-medium capitalize leading-6 text-gray-800 dark:text-white" id="modal-title">
                {action === "CREATE" ? "Create Flight" : "Update Flight"}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Your new project has been created. Invite your team to collaborate on this project.
              </p>

              <form className="mt-4" action="#">
                <label htmlFor="emails-list" className="text-sm text-gray-700 dark:text-gray-200">
                  Email address
                </label>

                <label className="mt-3 block" htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="user@email.xyz"
                    value="devdhaif@gmail.com"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label className="mt-3 block" htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="user@email.xyz"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <label className="mt-3 block" htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="user@email.xyz"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </label>

                <button
                  type="button"
                  className="mt-2 flex items-center rounded px-2 py-1.5 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>

                  <span className="mx-2">Add another</span>
                </button>

                <div className="mt-4 sm:-mx-2 sm:flex sm:items-center">
                  <button
                    type="button"
                    onClick={handleCancelAction}
                    className="w-full transform rounded-md border border-gray-200 px-4 py-2 text-sm font-medium capitalize tracking-wide text-gray-700 transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 sm:mx-2 sm:w-1/2"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="mt-3 w-full transform rounded-md bg-blue-600 px-4 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2 sm:mt-0 sm:w-1/2"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CreateFlightDialog
