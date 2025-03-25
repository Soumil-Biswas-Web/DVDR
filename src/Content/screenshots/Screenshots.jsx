import React, {useRef} from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Screenshots() {

    function getImagePaths(count) {
        return Array.from({ length: count }, (_, index) => 
            `/DVDR/images/screenshots/img${index + 1}.webp`
        );
    }

    const imgPaths = getImagePaths(9);

  
    const section = useRef(null);

    useGSAP(() => {
        const timeline = gsap.timeline()
  
        // Step 1: Ensure all elements are hidden at the start
        timeline.set(section.current.children, { opacity: 0, y: 100 });
  
        // Step 2: Animate elements appearing with a stagger
        timeline.to(section.current.children, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15
        });
    }, { scope: section });     

  return (
    <div ref={section} className='w-full bg-[--background-color] flex flex-col gap-1 mb-5 py-8'>
        {imgPaths.map((img, index) => {
            if((index+1)%3 === 0) return (
                <div key={index} className="flex flex-col gap-1 w-[90vw] mx-auto">
                    <div className="flex gap-1 w-full">
                        <img className='w-[44.8vw]' src={imgPaths[index-1]} alt={index - 1} />
                        <img className='w-[44.8vw]' src={imgPaths[index-2]} alt={index - 2} />
                    </div>
                    <img src={img} alt={index} />
                </div>
            )
        })}
    </div>
  )
}
