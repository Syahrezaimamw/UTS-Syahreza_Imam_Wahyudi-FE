import React from 'react'

const Button = ({children,fs}) => {
    return (
        <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold tracking-wide text-white bg-gray-900 rounded-sm shadow-xl hover:bg-red-900 focus:outline-none"
            onClick={fs}
        >
            {children}
        </button>
    )
}

export default Button
