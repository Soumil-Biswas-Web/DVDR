import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Videos() {

  const tabs = [
    {
        name: "Main",
        img: "/DVDR/images/logos/logo.png",
        to: "/Videos",
    },
    {
        name: "Central",
        img: "/DVDR/images/logos/logo-inverted.png",
        to: "/Videos/Central",
    },
  ]
  
  return (
    <div className='flex flex-col w-full gap-1.5'>
        {/* Tab Switching */}
        <div className="flex gap-8 ml-[4%]">
            {tabs.map((item, index) => (
                <Link key={index} to={item.to}>
                    <img 
                        className='p-2.5 rounded-lg bg-[--highlight-hover-color] hover:bg-transparent hover:bg-[image:var(--highlight-gradient)] duration-[450ms] transition-all w-[60px]' 
                        src={item.img} 
                        alt={item.name}
                    />
                </Link>
            ))}
        </div>

        <div className="w-full bg-[--background-color] mb-5">
            <Outlet/>
        </div>
    </div>
  )
}
