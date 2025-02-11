import React from 'react'
import Modal from '../template/Modal'

const Popup = ({modal,sub,Title,loadDel}) => {
    console.log(modal.popup)
  return (
   
        
    <div
    className={`relative z-50 ${modal.popup?'flex':'hidden'}`}
  >
    <div
      className="fixed inset-0 transition-opacity bg-black/50"
      aria-hidden="true"
    />
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
      
        <div className="relative z-50 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
          <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="flex items-center justify-center mx-auto bg-red-100 rounded-full size-12 shrink-0 sm:mx-0 sm:size-10">
                <svg
                  className="text-red-600 size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-base font-semibold text-gray-900"
                  id="modal-title"
                >
                  {Title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to {Title} your account? All of your
                    data will be permanently removed. This action cannot be
                    undone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
            <button
            onClick={sub}
              type="button"
              className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
                {loadDel?
                 'Tunggu...':
              'Delete'
                 }
            </button>
            <button
            onClick={()=>modal.setPopup(false)}
              type="button"
              className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>


  
  )
}

export default Popup
