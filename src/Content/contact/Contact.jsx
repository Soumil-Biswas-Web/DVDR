import React, {useRef} from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ContactItem from './components/ContactItem'
import Hero from '../../Components/Hero'

const Contact = () => {
  const contacts = [
    {
      name:"email",
      icon:"/DVDR/images/logos/logo-gmail.png",
      detail:"midnightmauraders420@gmail.com",
    },
    {
      name:"facebook",
      icon:"/DVDR/images/logos/logo-facebook.png",
      url: "https://www.facebook.com/gaming/DVDRcinematics",
      detail:"DVDRcinematics",
    },
    {
      name:"twitter",
      icon:"/DVDR/images/logos/logo-twitter.png",
      url: "https://twitter.com/DVDR_YT",
      detail:"DVDR_YT",
    },
    {
      name:"SoundCloud",
      icon:"/DVDR/images/logos/logo-soundcloud.png",
      url: "https://soundcloud.com/dvdr-central",
      detail:"DVDR Central",
    },
    {
      name:"Reddit",
      icon:"/DVDR/images/logos/logo-reddit.png",
      url: "https://www.reddit.com/user/MidnightMauraders420",
      detail:"u/MidnightMauraders420",
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
    <div className='magic-center mb-10 w-[90vw]'>
      <Hero
        h1="Contacts"
        h3="Where to find us."
      />

      <div ref={section} className="magic-center gap-2 w-[90vw]">
        {contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact} />
        ))}
      </div>
    </div>
  )
}

export default Contact
