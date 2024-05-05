"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const Hero = () => {
  const parallaxRef = useRef(null!);

  return (
    <section
      ref={parallaxRef}
      className="relative w-full h-screen flex flex-col gap-16 items-center justify-center text-white px-10 py-48"
    >
      Hero
    </section>
  );
};

export default Hero;
