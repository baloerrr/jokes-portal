import React from 'react'

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-md shadow-gray-200 rounded-md p-4 mb-5 mt-2">
      {children}
    </div>
  )
}

export default Card
