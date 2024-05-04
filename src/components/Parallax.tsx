"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Parallax() {
  const [background, setBackground] = useState(20);

  const parallaxRef = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const stars = useRef(null);
  const sun = useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        // defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "8000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        mountain3.current,
        {
          y: "-=80",
        },
        0
      );
      tl.to(
        mountain2.current,
        {
          y: "-=30",
        },
        0
      );
      tl.to(
        mountain1.current,
        {
          y: "+=50",
        },
        0
      );
      tl.to(
        stars.current,
        {
          top: 0,
        },
        0.5
      );
      tl.to(
        sun.current,
        {
          y: "+=210",
        },
        1
      );
      tl.to(
        copy.current,
        {
          y: "-250%",
          opacity: 1,
        },
        0
      );
      tl.to(
        btn.current,
        {
          opacity: 1,
        },
        1.5
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-outer overflow-hidden">
      <div
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )`,
        }}
        className="parallax relative w-full h-screen"
      >
        <img
          ref={mountain3}
          className="mountain-3 absolute w-full bottom-0"
          src="/parallax/mountain-3.svg"
          style={{
            zIndex: 3,
          }}
        />
        <img
          ref={mountain2}
          className="mountain-2 absolute w-full bottom-0"
          src="/parallax/mountain-2.svg"
          style={{
            zIndex: 2,
          }}
        />
        <img
          ref={mountain1}
          className="mountain-1 absolute w-full bottom-0"
          src="/parallax/mountain-1.svg"
          style={{
            zIndex: 1,
          }}
        />
        <img
          ref={sun}
          className="sun absolute"
          src="/parallax/sun.svg"
          style={{
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
          }}
        />

        <img
          ref={stars}
          className="stars w-full l-0 absolute bottom-0"
          style={{
            top: "-550px",
          }}
          src="/parallax/stars.svg"
        />
        <div ref={copy} className="copy absolute bottom-0 left-1/2">
          <h1>Journey</h1>
          <span ref={btn}>Discover more</span>
        </div>
      </div>
    </div>
  );
}

export default Parallax;
