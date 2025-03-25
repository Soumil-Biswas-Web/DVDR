import React, {useRef} from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from "react-router-dom";

const Home = () => {


  return (
    <div className="magic-center my-[50px] w-[70%] grow opacity-90">
      <div className="self-start flex flex-col gap-6">
        <h1 className="text-start">We're retired.</h1>
        <p>Seriously, we mean it.</p>
        <Link 
          className="p-2.5 bg-[red] hover:bg-slate-600 duration-300 rounded-lg"
          to={"Videos"}
        >Look, all our channels are dead.</Link>
      </div>
    </div>
  );
};

export default Home;
