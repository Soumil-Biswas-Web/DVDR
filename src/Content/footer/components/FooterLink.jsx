import React from 'react'
import { Link } from 'react-router-dom';
import clipBoard from '../../contact/components/clipBoard';

export default function FooterLink({contact}) {

  const img = (
    <img 
      className={`object-contain object-no-repeat object-center transition-all duration-300 border-2 border-transparent hover:border-[--highlight-color] ${
        (contact.name === "email" || contact.name === "facebook" || contact.name === "twitter") 
        ? "rounded-md"
        : "rounded-full"
      }`}
      src={contact.icon}
      alt={contact.name}
    />
  )

  if (contact.detail) return (
    <button
      className="w-5 sm:w-7"
      onClick={() => clipBoard(contact.detail)}
    >
      {img}
    </button>
  )
  else return (
    <Link
      className="w-5 sm:w-7"
      to={contact.url}
      target='_blank'  
    >
      {img}
    </Link>
  )
}
