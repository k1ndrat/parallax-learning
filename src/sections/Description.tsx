"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

const Description = () => {
  const parallaxRef = useRef(null!);
  const panda = useRef(null!);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // pin: true,
          // markers: true,
          onUpdate: (self) => {
            console.log("desc", self.progress);
          },
        },
      });
      tl.fromTo(
        panda.current,
        {
          opacity: 0,
        },
        {
          duration: 0.3,
          opacity: 1,
          ease: "none",
          // yoyo: true,
        },
        0
      );
      tl.fromTo(
        panda.current,
        {
          // duration: 1,
          x: "58vw",
          y: "-100vh",
          // ease: "none",
        },
        {
          duration: 1,
          x: "-58vw",
          y: "125vh",
          // x: "-200%",
          ease: "none",
          // yoyo: true,
        },
        0
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // useGSAP(
  //   () => {
  //     gsap.to(panda.current, {
  //       opacity: 0,
  //       immediateRender: false,
  //       scrollTrigger: {
  //         trigger: parallaxRef.current,
  //         start: "top center",
  //         end: "bottom bottom",
  //         scrub: true,
  //         markers: true,
  //       },
  //     });
  //   },
  //   { scope: parallaxRef, revertOnUpdate: false }
  // );

  return (
    <section
      ref={parallaxRef}
      className="relative w-full min-h-screen flex flex-col items-center gap-6 md:gap-16 text-white"
    >
      <Image
        ref={panda}
        className="absolute top-0 hidden md:block"
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fajbjedoi2l3vdvjsnn1o&w=1080&q=75"
        }
        alt="Panda"
        height={1000}
        width={400}
        loading="eager"
      />
      <Image
        className="block md:hidden"
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fajbjedoi2l3vdvjsnn1o&w=1080&q=75"
        }
        alt="Panda"
        height={1000}
        width={300}
        loading="eager"
      />
      <div className="relative w-full md:h-screen"></div>
      <div className="flex flex-col items-center justify-end">
        <h3 className="relative z-10 text-center text-2xl font-semibold text-white lg:text-5xl">
          A modular EVM <br /> compatible L1 blockchain <br /> powered by
          <span className="bg-gradient-to-r from-[#FEC600] to-[#FDE619] bg-clip-text font-semibold text-transparent">
            {" "}
            Proof Of Liquidity
          </span>
        </h3>
      </div>
    </section>
  );
};

export default Description;
