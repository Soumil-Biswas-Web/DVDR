import React from 'react'
import { Link } from 'react-router-dom'

export default function VideoItem({item}) {
  return (
    <Link 
        to={'https://www.youtube.com/watch?v='+item.id.videoId} target='_blank'
        className='lg:w-[23vw] m-4 max-w-[330px] rounded-lg overflow-hidden outline outline-transparent hover:outline-[--contrast-color] duration-300'
    >
        <img 
            className='aspect-video object-center object-cover'
            src={item.snippet.thumbnails.high.url} 
            alt={item.snippet.title} 
        />
    </Link>
  )
}
