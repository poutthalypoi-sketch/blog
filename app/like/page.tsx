'use client'

import { useState } from 'react'

export default function LikePage() {
  const [likesCount, setLikesCount] = useState(0) 
  const [isAnimating, setIsAnimating] = useState(false)

  const handleLike = () => {
    setLikesCount(likesCount + 1)
    
    // ເຕັ້ນຕອນກົດ
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full text-center border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Like System</h1>
      

        
        <div className="flex flex-col items-center gap-2 mb-6">
          <button 
            onClick={handleLike}
            className=" font-semibold py-3 px-6 rounded-xl shadow-md shadow-blue-200 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className={`text-xl transition-transform duration-300 ${isAnimating ? 'scale-150' : 'scale-100'}`}>
              👍
            </span>
  
          </button>

         
          <div className="text-sm font-medium text-gray-600 flex items-center gap-1.5">
            <span> All likes:</span>
            <strong className="text-blue-600 text-base font-bold">{likesCount}</strong>
          </div>
        </div>

        {/* ປຸ່ມ Reset */}
        <button 
          onClick={() => setLikesCount(0)}
          className=" bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-20 text-sm cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  )
}