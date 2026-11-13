'use client'
import React, { useState, useEffect } from 'react'

export default function CountBack() {
  const [count, setCount] = useState(10)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [count])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full text-center border border-gray-100">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Countdown Timer</h1>

       
        <div className="bg-blue-50 text-blue-600 rounded-xl py-6 px-6 mb-6">
          <span className="text-6xl font-extrabold">{count}</span>
          <span className="block text-xs font-medium uppercase tracking-wider text-blue-400 mt-2">Seconds</span>
        </div>

        {/* ສະຖານະເມື່ອໝົດເວລາ */}
        {count === 0 && (
          <p className="text-green-600 font-semibold mb-4">Time is up!</p>
        )}

        <button 
          onClick={() => setCount(10)}
           className=" bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-20 text-sm cursor-pointer"
        >
          Reset 
        </button>
      </div>
    </div>
  )
}