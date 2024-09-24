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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-400 focus:border-cyan-400 block w-full p-2.5 outline-none "
                placeholder={title}
            />

        </>
    )
}

export default InputKendaraan
