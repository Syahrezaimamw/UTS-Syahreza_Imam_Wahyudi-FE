import React from 'react'

const Button = ({children,handle}) => {
    return (
        <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold tracking-wide text-white bg-blue-600 rounded-sm shadow-xl hover:bg-blue-700 focus:outline-none"
            onClick={handle}
        >
            {children}
        </button>
    )
}

export default Button
