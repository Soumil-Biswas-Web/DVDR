import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import clipBoard from './clipBoard';

export default function ContactItem({contact}) {

  const classname = 'group w-full max-w-[500px] relative overflow-y-hidden rounded-[20px]'

  const img = (
    <div className='flex items-center gap-2 md:gap-8 rounded-[20px] px-2'>
      <img
        className="block w-5 sm:w-10 m-2.5 aspect-square rounded-xl mb-2 object-contain object-no-repeat object-center transition-all duration-[400ms] z-[1]"
        src={contact.icon}
        alt={contact.name}
      />
      <p className='text-lg xs:text-2xl sm:!text-3xl z-[1] group-hover:text-white leading-none'>{contact.detail}</p>
    </div>
  )

  if (!contact.url) return (
    <button 
      className={classname}
      onClick={() => clipBoard(contact.detail)}
    >
      {img}
    </button>
  )
  return (
    <Link className={classname}
      to={contact.url}
      target='_blank' 
    >
      {img}
    </Link>
  )
}
