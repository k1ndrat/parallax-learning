"use client";

import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const Chain = () => {
  const parallaxRef = useRef(null);
  const test = useRef(null);

  const bear1 = useRef(null);
  const bear2 = useRef(null);
  const bear3 = useRef(null);
  const bear4 = useRef(null);
  const bear5 = useRef(null);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const text5 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        // defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "4000 bottom",
          scrub: true,
          pin: true,
          // onUpdate: (self) => {
          //   setBackground(Math.ceil(self.progress * 100 + 20));
          // },
        },
      });
      // 5
      tl.to(
        bear5.current,
        {
          duration: 1,
          opacity: "0",
        },
        0
      );
      tl.to(
        text5.current,
        {
          duration: 0.3,
          opacity: "0",
        },
        0.7
      );
      // 4
      tl.to(
        bear4.current,
        {
          duration: 1,
          opacity: "0",
        },
        1
      );
      tl.to(
        text4.current,
        {
          duration: 0.2,
          opacity: "1",
        },
        0.9
      );
      tl.to(
        text4.current,
        {
          duration: 0.3,
          opacity: "0",
        },
        1.7
      );
      // 3
      tl.to(
        bear3.current,
        {
          duration: 1,
          opacity: "0",
        },
        2
      );
      tl.to(
        text3.current,
        {
          duration: 0.2,
          opacity: "1",
        },
        1.9
      );
      tl.to(
        text3.current,
        {
          duration: 0.3,
          opacity: "0",
        },
        2.7
      );
      // 2
      tl.to(
        bear2.current,
        {
          duration: 1,
          opacity: "0",
        },
        3
      );
      tl.to(
        text2.current,
        {
          duration: 0.2,
          opacity: "1",
        },
        2.9
      );
      tl.to(
        text2.current,
        {
          duration: 0.3,
          opacity: "0",
        },
        3.7
      );
      // 1
      tl.to(
        text1.current,
        {
          duration: 0.2,
          opacity: "1",
        },
        3.9
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={parallaxRef}
      className="relative w-full h-screen flex items-center justify-center flex-col m-auto gap-12"
    >
      {/* BEARs */}
      <div className="flex max-w-screen-lg items-end justify-center gap-6">
        <div className="" style={{ flexBasis: "24%" }}>
          <Image
            ref={bear1}
            className="w-full"
            src="https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fafuzrct3llv7vdtgnsxx&w=640&q=75"
            alt="bear"
            height={1024}
            width={1024}
          />
        </div>
        <div className="" style={{ flexBasis: "19%" }}>
          <Image
            ref={bear2}
            className="w-full"
            src="https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fxpme2mcszsodf7cpxeha&w=384&q=75"
            alt="bear"
            height={1024}
            width={1024}
          />
        </div>
        <div className="" style={{ flexBasis: "22%" }}>
          <Image
            ref={bear3}
            className="w-full"
            src="https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fsbadt25rriet5ncpfmca&w=640&q=75"
            alt="bear"
            height={1024}
            width={1024}
          />
        </div>
        <div className="" style={{ flexBasis: "22%" }}>
          <Image
            ref={bear4}
            className="w-full"
            src="https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fodolg4znooffbsmsxodn&w=640&q=75"
            alt="bear"
            height={1024}
            width={1024}
          />
        </div>
        <div className="" style={{ flexBasis: "42%" }}>
          <Image
            ref={bear5}
            className="w-full"
            src="https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fn97kbx9s8o5lj7ao8wp7&w=828&q=75"
            alt="bear"
            height={1024}
            width={1024}
          />
        </div>
      </div>

      {/* TEXTs */}
      <div className="relative w-[90vw]">
        <div
          ref={text1}
          className=" w-full text-center opacity-0 text-4xl font-medium"
        >
          Started as an NFT project for fun <br /> in the{" "}
          <span className="text-amber-300 font-semibold">DeFi</span> ecosystem
        </div>
        <div
          ref={text2}
          className="absolute top-0 w-full text-center opacity-0 text-4xl font-medium"
        >
          Made the <span className="text-amber-300 font-semibold">NFTs</span>{" "}
          rebase and grew a massive cult community
        </div>
        <div
          ref={text3}
          className="absolute top-0 w-full text-center opacity-0 text-4xl font-medium"
        >
          Identified major gaps in protocol level alignment between{" "}
          <span className="text-amber-300 font-semibold">
            liquidity and security
          </span>
        </div>
        <div
          ref={text4}
          className="absolute top-0 w-full text-center opacity-0 text-4xl font-medium"
        >
          Raised VC from some of the{" "}
          <span className="text-amber-300 font-semibold">best firms</span> in
          the game
        </div>
        <div
          ref={text5}
          className="absolute top-0 w-full text-center text-4xl font-medium"
        >
          <span className="text-amber-300 font-semibold">Launched</span> a chain
          🚀 🚀 🚀
        </div>
      </div>
    </section>
  );
};

export default Chain;
