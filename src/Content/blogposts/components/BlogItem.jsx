import React from 'react'

export default function BlogItem({item}) {
  return (
    <div>
        <div className="p-3 bg-[--contrast-color] flex flex-col border-8 border-[--contrast-color-offset] rounded-xl w-[80vw] max-w-[500px] py-8">
            <p className='text-slate-800 underline font-bold mb-6'>{("@"+item.user)}</p>
            <p className='text-slate-800 whitespace-pre-wrap'>{item.message}</p>
            {item.img && 
                <div className="border-2 rounded-lg border-[--background-color-offset] bg-[--background-color] overflow-hidden">
                    <img className='mx-auto max-h-[300px] object-contain' src={item.img} alt={(item.user + crypto.randomUUID())} />
                </div>
            }
        </div>
    </div>
  )
}
