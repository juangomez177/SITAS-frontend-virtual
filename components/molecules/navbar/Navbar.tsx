import UserIcon from "app/static/icons/User"
import React from "react"

const Navbar = () => {
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <a href="#">
            <h1 className="italic">Singapur Airlines</h1>
          </a>

          <UserIcon />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
