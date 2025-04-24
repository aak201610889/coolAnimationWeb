import React from "react";
import BackgroundImg from "../assets/img/about.webp";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
function About() {

useGSAP(
  ()=>{
   const clipAnimation= gsap.timeline({
    scrollTrigger:{
        trigger:'#clip',
        start:'center center',
        end:'+=800 center',
        scrub:0.5,
        pin:true,
        pinSpacer:true
      }
    })


    clipAnimation.to('.mask-clip-path',{
      width:'100vw',
      height:'100vh',
      borderRadius:0
    })
  }
)








  return (
    <div id="about" className="min-h-screen w-scree">
      <div
        className="relative mb-8 mt-36 flex flex-col 
    items-center gap-5"
      >
        <h2
          className="font-general text-sm uppercase 
    md:text-[10px]"
        >
          Welcome to Zentry
        </h2>
        <div
          className="mt-5 text-center text-4xl uppercase 
    leading-[0.8] md:text-[6rem]"
        >
          Disc<b>o</b>ver the the world's <br />l<b>a</b>rgest shared adventure
        </div>
        <div className="about-subtext">
          <p>The Game of games begins-your life , noew an epic MMorpbg </p>

          <p>
            gameo unites every player countless games and platforms 
          </p>
        </div>
      </div>


<div className="h-dvh w-screen" id='clip'>

  <div className="mask-clip-path about-image">

    <img src={BackgroundImg} alt="Background" className="absolute left-0 top-0 size-full object-cover" />
  </div>
</div>

    </div>
  );
}

export default About;
