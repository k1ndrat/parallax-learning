"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const Hero = () => {
  const parallaxRef = useRef(null!);
  const title = useRef(null!);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          // pin: true,
          // markers: true,
          onUpdate: (self) => {
            // console.log(self.progress);
          },
        },
      });

      tl.fromTo(
        title.current,
        {
          // opacity: 0,
          scale: 0.75,
          // display: "block",
        },
        {
          // opacity: 1,
          duration: 0.5,
          scale: 1,
          ease: "none",
        },
        0
      );
      tl.fromTo(
        title.current,
        {
          opacity: 0,
          // scale: 0.75,
          display: "block",
        },
        {
          duration: 1,
          opacity: 1,
          // scale: 1,
          ease: "none",
        },
        0
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="relative w-full flex flex-col gap-16 items-center justify-center text-white"
    >
      <div className="h-96"></div>
      <div className="h-48"></div>
      <h1
        ref={title}
        className="fixed top-[50%] translate-y-[-50%] text-center text-6xl font-semibold text-white sm:text-[80px] md:text-[100px] lg:text-[150px] xl:text-[200px] hidden"
      >
        Berachain
      </h1>
      <Image
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fjsll6tbj4psn9oxswpen&w=3840&q=75"
        }
        alt=""
        width={2000}
        height={0}
        className="w-full  z-10"
      />
    </section>
  );
};

export default Hero;
