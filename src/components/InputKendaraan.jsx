import React from 'react'

const InputKendaraan = ({name,type,title,change,value}) => {
    return (
        <>
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 "
            >
               {title}
            </label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={(e)=>change(e)}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder={title}
                required=""
            />

        </>
    )
}

export default InputKendaraan
