import React from 'react'
import { assets } from '../assets/admin_assets/assets'
const Nav = () => {
    return (
     <>
         <div className="flex  items-center  justify-between p-4 bg-gray-100">
        <p className="text-4xl font-bold mb-4">
          fresh<span className="text-primary">feast.</span>
        </p>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <img src={assets.profile_image} alt="Profile 1" className="w-12 h-12 rounded-full" />

        </div>
       
      </div>

       <hr className="border-gray-300 w-full" />
     </>
    )
  }
  
  export default Nav