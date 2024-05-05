"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const Description = () => {
  const parallaxRef = useRef(null!);
  const panda = useRef(null!);

  useEffect(() => {
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
        },
      });
      tl.fromTo(
        panda.current,
        {
          opacity: 0,
        },
        {
          duration: 0.1,
          opacity: 1,
          ease: "none",
          // yoyo: true,
        },
        0
      );
      tl.fromTo(
        panda.current,
        {
          x: "57vw",
          y: "-100vh",
        },
        {
          duration: 1,
          x: "-57vw",
          y: "100vh",
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

  return (
    <section
      ref={parallaxRef}
      className="relative w-full h-screen flex flex-col gap-16 items-center justify-center text-white px-10 py-48"
      // style={{ height: "200vh" }}
    >
      <Image
        ref={panda}
        className="absolute"
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fajbjedoi2l3vdvjsnn1o&w=1080&q=75"
        }
        alt="Panda"
        height={1000}
        width={350}
      />
      Description
    </section>
  );
};

export default Description;
