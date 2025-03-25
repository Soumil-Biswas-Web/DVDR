import React, {useRef} from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import axios from "axios";
import VideoItem from './VideoItem';
import { useLoaderData } from 'react-router-dom';

export default function CentralChannel() {

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

  let videos = useLoaderData();

  return (
    <div ref={section} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-around place-items-center my-10'>
      {videos.map((item, index) => (
        <VideoItem
          key={index}
          item={item}
        />
      ))}
    </div>
  )
}

CentralChannel.loader = async ()  => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_YOUTUBE_API_KEY}&channelId=${import.meta.env.VITE_DVDR_CENTRAL_ID}&part=snippet,id&order=date&maxResults=12`
    );
    console.log(response.data);
    return response.data.items;
  } 
  catch (e) {
    let msg;
    // Enhanced error handling
    if (e.response) {
      // Server responded with a status code other than 2xx
      msg = `Error ${e.response.status}: ${e.response.data || "Server error"}`;
    } else if (e.request) {
      // Request was made but no response received
      msg = "No response received from server";
    } else {
      // Something else caused the error
      msg = ("Error:", e.message)
    }
    console.error(msg);
  }
}
