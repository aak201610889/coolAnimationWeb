import React from "react";
import BentoCard from "./BentoCard";

function Features() {
  return (

    <div className="pb-9 bg-black">


    <div className=" lg:w-[80%] w-[100%]  m-auto">
      <div className="container mx-auto px-3 md:px-10 mb-12">
        <div className="px-5 py-10">
          <p className="font-circular-web text-lg text-blue-50 text-center">
            Info theMetagame Layer
          </p>
        </div>
        <p className=" max-w-md font-circular-web text-lg text-blue-50 opacity-50 text-center mx-auto">
          Immerse yourself in a rich and ever-expanding universe where a vibrate
          array of products converge into a interconnected overlay experience on
          your world.
        </p>
      </div>

      <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h[65vh] ">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              gam<b>e</b>o
            </>
          }
          disc="A cross-platform metagame app, turning your activities across web2 and web3 games into a rewarding adventure."
          isComingSoon={true}
        />

      </div>

        <div className=" grid h-[137vh] grid-cols-2 grid-rows-2 gap-7 ">
        <div className=" bento-tilt-1 row-span-1 col-span-3 md:col-span-1 md:row-span-2 ">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                gam<b>e</b>o
              </>
            }
            disc="A cross-platform metagame app, turning your activities across web2 and web3 games into a rewarding adventure."
            isComingSoon={true}
          />
          </div>
        <div className=" bento-tilt-1 row-span-1 col-span-3 md:col-span-1 md:row-span-1 ">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
 
              </>
            }
            disc=""
            isComingSoon={false}
          />
          </div>
        <div className=" bento-tilt-1 row-span-1 col-span-3 md:col-span-1 md:row-span-1 ">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                gam<b>e</b>o
              </>
            }
           disc="A cross-platform metagame app, turning your activities across web2 and web3 games into a rewarding adventure."
            isComingSoon={false}
          />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Features;
