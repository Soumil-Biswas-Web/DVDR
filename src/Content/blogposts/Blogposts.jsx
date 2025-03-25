import React, {useRef} from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from "react-router-dom";
import BlogItem from "./components/blogItem";

export default function Blogposts() {    
  
  const messages = [
    {
        user: "Rugino3",
        date: "2025",
        message: "10 years and still didn't learn a thing about marketing",
        img: "",
    },
    {
        user: "Rugino3",
        date: "2014",
        message: 
`"Will you please write something for the blog? Something? Anything?"

No.`,
        img: "/DVDR/images/blog/66f-1.jpg",
    },
    {
        user: "V_Play",
        date: "2014",
        message: "Will you please write something for the blog? Something? Anything?",
    },
  ]

  const section = useRef(null);

  useGSAP(() => {
      const timeline = gsap.timeline()
  
      // Step 1: Ensure all elements are hidden at the start
      timeline.set(section.current.children, { opacity: 0, y: 100 });

      // Step 2: Animate elements appearing with a stagger
      timeline.to(section.current.children, {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 0.15
      });
  }, { scope: section }); 

  
  return (
    <div ref={section} className="magic-center my-[100px] w-[70%] grow gap-1">
        {messages.map((item, index) => (
            <BlogItem key={index} item={item} />
        ))}
    </div>
  )
}
