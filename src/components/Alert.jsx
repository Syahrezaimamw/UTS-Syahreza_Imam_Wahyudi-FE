import React from 'react'

import { useState } from 'react';
const Alert = ({alerts,err}) => {

   
  return (
    <div className="flex flex-col items-center">
    <div className="fixed z-[100] space-y-2 top-5 right-5">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="px-4 py-3 text-white bg-red-500 rounded shadow-md animate__faster animate__animated animate__fadeInLeft "
        >
          {err}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Alert
