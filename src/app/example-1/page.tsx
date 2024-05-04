"use client";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useRef } from "react";
import { animated, useScroll, useSpring } from "react-spring";

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const page = () => {
  const parallax = useRef<IParallax>(null);
  const ref = useRef(null!);

  const [textStyles, textApi] = useSpring(() => ({
    opacity: "0",
    onStart: () => console.log("the spring has started"),
  }));

  const { scrollYProgress } = useScroll({
    // container: ref,
    onChange: ({ value: { scrollYProgress } }) => {
      console.log(scrollYProgress);

      if (scrollYProgress > 0.7) {
        textApi.start({ opacity: "0" });
      } else {
        textApi.start({ opacity: "1" });
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#253237",
      }}
      ref={ref}
    >
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1}
          factor={2}
          speed={0}
          style={{
            backgroundColor: "#805E73",
            display: "grid",
            placeContent: "center",
          }}
        />

        <ParallaxLayer
          style={{
            display: "grid",
            placeContent: "center",
          }}
          sticky={{ start: 1, end: 2 }}
        >
          <animated.div style={textStyles}>SUKA</animated.div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          style={{ backgroundColor: "#87BCDE" }}
        />
      </Parallax>
    </div>
  );
};

export default page;
