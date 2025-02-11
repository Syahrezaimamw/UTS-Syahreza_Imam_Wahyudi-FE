import React from 'react'
import { FaX } from "react-icons/fa6";

const Modal = ({modal,title,children}) => {
  return (
    <>
    <div
    className={`${modal.showModal ? 'flex' : 'hidden'} bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[99] justify-center  items-center w-full md:inset-0 h-[calc(100%-1rem)] min-h-screen  `}
>
    <div className="relative w-full max-w-[750px] max-h-full p-4">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow ">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5">
                <h3 className="text-xl font-bold text-gray-800 ">
                    {title.toUpperCase()}
                </h3>
                <button
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    data-modal-hide="authentication-modal"
                    onClick={() => modal.setShowModal(false)}
                >
                    <FaX
                    ></FaX>
                </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5">
                <div className="space-y-4" action="#">
                    {children}
                </div>
            </div>
        </div>
    </div>
</div>
                    </>
  )
}

export default Modal
