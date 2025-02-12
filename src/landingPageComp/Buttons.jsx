import React from 'react'
import { Link } from 'react-router-dom'
const Buttons = () => {
  return (
    <div>
        <Link
            to={'/loginUser'}
            className="px-4 py-2 text-sm font-medium text-center border-2 me-3 border-cyan-700 text-cyan-700"
            >
            Login
          </Link>
          <Link
            to={'/registerUser'}
            className="px-4 py-2 text-sm font-medium text-center text-white border-2 border-cyan-700 bg-cyan-700"
          >
            Register
          </Link>
    </div>
  )
}

export default Buttons
