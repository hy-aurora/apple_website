import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { heroVideo,smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";


const Hero = () => {
  const [videoSrc] = useState(window.innerWidth
    <760 ? smallHeroVideo : heroVideo)
    const handleVideoSrcSet = () => {
      if (window.innerWidth < 760) {
        return smallHeroVideo;
      } else {
        return heroVideo;
      }
    }
    useEffect(() => {
      window.addEventListener("resize",handleVideoSrcSet);
      return () => {
        window.addEventListener("resize",handleVideoSrcSet)
      }
},[])

  useGSAP(() => {
    gsap.to("#hero",{opacity:1,delay:2})
    gsap.to("#cta",{opacity:1,y:-50,delay:2})
  },[])
  return (
    <section className="w-ful nav-height  bg-black
    relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title text-center">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} >
          <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>

      <div id="cta" className="  absolute bottom-0 left-0 right-0 flex-center flex-col gap-4 opacity-0">
        <a
          href="#highlights"
          className=" w-20 text-center px-20 py-2 rounded-3xl bg-blue-500 my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue-500 hover:border-blue-500;"
        >
          Buy
        </a>
        <p className="font-normal text-xl text-center">From $199/month or $1,999</p>
      </div>
    </section>
  )
}

export default Hero