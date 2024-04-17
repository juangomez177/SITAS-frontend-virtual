import PlaneIcon from "app/static/icons/Plane"
import React from "react"

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className=" bg-white">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-4 p-6 sm:flex-row sm:space-y-0">
          <a href="#">
            <h1 className="italic">Singapur Airlines</h1>
          </a>
          <p>© Copyright 2021. All Rights Reserved.</p>

          <PlaneIcon />
        </div>
      </div>
    </footer>
  )
}

export default Footer
