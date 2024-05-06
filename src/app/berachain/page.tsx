"use client";

import Stars from "@/components/Stars";
import Chain from "@/sections/Chain";
import Community from "@/sections/Community";
import Description from "@/sections/Description";
import Ecosystem from "@/sections/Ecosystem";
import Hero from "@/sections/Hero";
import Investors from "@/sections/Investors";
import Pol from "@/sections/Pol";
import Principles from "@/sections/Principles";
import Ufo from "@/sections/Ufo";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Berachain = () => {
  const containerRef = useRef<HTMLInputElement>(null!);

  const [backgroundDark, setBackgroundDark] = useState("#5cace7");
  const [backgroundLight, setBackgroundLight] = useState("#5cace7");
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // window.scrollTo({ top: 100000 });
    setHeight(window.innerHeight);

    const hero = document.querySelector("#hero");
    hero && hero.scrollIntoView({ behavior: "instant", block: "end" });

    const resreshOnScroll = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", resreshOnScroll);

    return () => {
      window.removeEventListener("resize", resreshOnScroll);
    };
  }, [setHeight]);

  return (
    <div className="layout" ref={containerRef}>
      <div className="overflow-clip relative">
        {/* BG */}
        <div
          className="fixed w-screen h-screen"
          style={{
            background: `linear-gradient(${backgroundDark} ${0}%, ${backgroundLight} ${100}%)`,
          }}
        ></div>

        {/* STARS BG */}
        <Stars height={height} />

        {/* SECTIONS */}
        <Community />
        <Chain />
        <Ufo
          setBackgroundDark={setBackgroundDark}
          setBackgroundLight={setBackgroundLight}
        />
        <Ecosystem setBackgroundDark={setBackgroundDark} />
        <Principles />
        <Investors />
        <Pol
          setBackgroundDark={setBackgroundDark}
          setBackgroundLight={setBackgroundLight}
        />
        <Description />
        <Hero />
      </div>
    </div>
  );
};

export default Berachain;
