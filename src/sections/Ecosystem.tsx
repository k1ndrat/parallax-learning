"use client";

import React, { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const getColors = (k: number, color1 = "15161f", color2 = "5cace7") => {
  const r1 = parseInt(color1.slice(0, 2), 16);
  const g1 = parseInt(color1.slice(2, 4), 16);
  const b1 = parseInt(color1.slice(4, 6), 16);

  const r2 = parseInt(color2.slice(0, 2), 16);
  const g2 = parseInt(color2.slice(2, 4), 16);
  const b2 = parseInt(color2.slice(4, 6), 16);

  const r = Math.round(r1 + (r2 - r1) * k).toString(16);
  const g = Math.round(g1 + (g2 - g1) * k).toString(16);
  const b = Math.round(b1 + (b2 - b1) * k).toString(16);

  const res = "#" + r + g + b;
  return res;
};
interface Props {
  setBackgroundDark: (value: string) => void;
}
const Ecosystem = ({ setBackgroundDark }: Props) => {
  const parallaxRef = useRef(null);

  const imgRef = useRef(null);
  const cloud1 = useRef(null);
  const cloud2 = useRef(null);
  const cloud3 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        // defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
          onUpdate: (self) => {
            setBackgroundDark(getColors(self.progress));
          },
        },
      });
      var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          // markers: true,
        },
      });
      tl2.fromTo(
        imgRef.current,
        { x: "-150%", ease: "none" },
        { x: "150%", ease: "none" },
        0
      );
    });

    const cloud1Anim = gsap.fromTo(
      cloud1.current,
      { y: 15 },
      { y: -15, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );
    const cloud2Anim = gsap.fromTo(
      cloud2.current,
      { y: -25 },
      { y: 25, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );
    const cloud3Anim = gsap.fromTo(
      cloud3.current,
      { y: -25 },
      {
        y: 25,
        duration: 2.2,
        delay: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );

    return () => {};
  }, []);
  return (
    <section
      ref={parallaxRef}
      className="relative w-full h-screen flex items-center justify-center text-4xl"
    >
      <Image
        className="z-10"
        ref={imgRef}
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Fv1689960325%2FnewFoundation%2Fsrdbicq2ogvsrkf9xas9&w=1920&q=75"
        }
        alt="tablo"
        height={800}
        width={800}
        loading="eager"
      />

      <Image
        className="absolute left-32 top-0"
        ref={cloud1}
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fclouds%2Fjzqmdph0majfloy6frit&w=1080&q=75"
        }
        alt="cloud"
        height={800}
        width={800}
        loading="eager"
      />
      <Image
        className="absolute right-0"
        ref={cloud2}
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fclouds%2Fxhte7rvze5dioycj6ayd&w=1920&q=75"
        }
        alt="cloud"
        height={800}
        width={800}
        loading="eager"
      />
      <Image
        className="absolute bottom-0 left-0"
        ref={cloud3}
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fclouds%2Fhy4mgihwgh8lbr03pmkb&w=1080&q=75"
        }
        alt="cloud"
        height={800}
        width={800}
        loading="eager"
      />
    </section>
  );
};

export default Ecosystem;
