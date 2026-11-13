import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    
    <div className="flex flex-col items-center pt-24 px-4 pb-12">
       
       <h1 className="text-2xl font-bold mb-6">About me</h1>

       <img 
         src="/pictur/phoud1.jpg" 
         alt="Profile" 
         className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mb-4" 
       />
       
      
       <div className="text-center max-w-md">
         <h2 className="text-xl font-bold text-gray-800 mb-2">Novice Phoudthaly Phonemany</h2>
         <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
           Hi! I'm a Frontend Developer and now I'm studying at the National University of Laos. 
           I have a passion for creating beautiful and functional web applications. 
           I enjoy learning new technologies and improving my skills in web development.
         </p>

         <Link href="/" className="text-blue-600 hover:underline">
           Back to Home
         </Link>
       </div>
    </div>
  )
}