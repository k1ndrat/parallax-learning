"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const parallaxRef = useRef(null!);
  const title = useRef(null!);

  const upOnly = useRef(null!);

  useEffect(() => {
    const upOnlyAnim = gsap.fromTo(
      upOnly.current,
      { y: 20 },
      { y: -20, duration: 1.3, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      });
      tl.fromTo(
        title.current,
        {
          scale: 0.75,
        },
        {
          duration: 0.3,
          scale: 1,
          ease: "none",
        },
        0
      );
      tl.fromTo(
        title.current,
        {
          opacity: 0,
        },
        {
          duration: 0.3,
          opacity: 1,
          display: "block",
          ease: "none",
        },
        0
      );
      tl.to(
        title.current,
        {
          duration: 1,
          display: "block",
          ease: "none",
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
  //     gsap.to(title.current, {
  //       opacity: 0,
  //       immediateRender: false,
  //       scrollTrigger: {
  //         trigger: parallaxRef.current,
  //         start: "top center",
  //         end: "bottom bottom",
  //         scrub: true,
  //         markers: true,
  //         onUpdate: (self) => {
  //           setRender(self.progress);
  //         },
  //       },
  //     });
  //   },
  //   { scope: parallaxRef, revertOnUpdate: false }
  // );

  return (
    <section
      id="hero"
      ref={parallaxRef}
      className="relative w-full min-h-screen flex flex-col gap-16 items-center justify-center text-white"
    >
      <div className="w-full h-96"></div>
      {/* <div className="h-48"></div> */}
      <h1
        ref={title}
        className="fixed top-[50%] translate-y-[-50%] text-center text-6xl font-semibold text-white sm:text-[80px] md:text-[100px] lg:text-[150px] xl:text-[200px] "
      >
        Berachain
      </h1>
      <Image
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fjsll6tbj4psn9oxswpen&w=3840&q=75"
        }
        // src={"/hero/bg.webp"}
        alt=""
        width={2000}
        height={0}
        className="w-full z-10"
        loading="eager"
      />
      <div
        ref={upOnly}
        className="absolute bottom-[20vh] z-10 text-center text-4xl font-extrabold text-[#2F4D24] xl:text-8xl"
      >
        Up Only ↑
      </div>
    </section>
  );
};

export default Hero;
