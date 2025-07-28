import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">SmartCampus</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Login</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Register</a>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
