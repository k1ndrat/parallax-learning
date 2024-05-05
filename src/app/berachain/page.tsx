"use client";

import Stars from "@/components/Stars";
import Chain from "@/sections/Chain";
import Community from "@/sections/Community";
import Ecosystem from "@/sections/Ecosystem";
import Investors from "@/sections/Investors";
import Principles from "@/sections/Principles";
import Ufo from "@/sections/Ufo";
import { useEffect, useRef, useState } from "react";

const Berachain = () => {
  const containerRef = useRef<HTMLInputElement>(null!);

  const [backgroundDark, setBackgroundDark] = useState("#5cace7");
  const [backgroundLight, setBackgroundLight] = useState("#5cace7");
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 100000 });
    setHeight(window.innerHeight);
    // console.log(window.innerHeight);
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
      </div>
    </div>
  );
};

export default Berachain;
