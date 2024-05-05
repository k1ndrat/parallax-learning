"use cLient";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
  setBackgroundLight: (value: string) => void;
}

const Ufo = ({ setBackgroundDark, setBackgroundLight }: Props) => {
  const parallaxRef = useRef(null);
  const ufoRef = useRef(null);
  const ufoLight = useRef(null);
  const ufoArticles = useRef(null);

  const article1 = useRef(null);
  const article2 = useRef(null);
  const article3 = useRef(null);

  useLayoutEffect(() => {
    const bearAnim = gsap.fromTo(
      ufoRef.current,
      { y: 20 },
      { y: -20, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );
    const art1Anim = gsap.fromTo(
      article1.current,
      { y: -10 },
      { y: 10, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );
    const art2Anim = gsap.fromTo(
      article2.current,
      { y: 10 },
      {
        y: -10,
        duration: 2.5,
        delay: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );
    const art3Anim = gsap.fromTo(
      article3.current,
      { y: -10 },
      { y: 10, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        // defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "2000 top",
          scrub: true,
          pin: true,
          // markers: true,
          onUpdate: (self) => {
            if (self.progress > 0.5 && self.progress < 1) {
              setBackgroundLight(getColors((self.progress - 0.5) * 2));
            } else if (self.progress < 0.5) {
              setBackgroundLight(getColors(0));
            }
          },
        },
      });
      tl.to(
        ufoLight.current,
        {
          duration: 0.3,
          opacity: "0",
          delay: 1,
        },
        0
      );
      tl.to(
        ufoArticles.current,
        {
          duration: 0.3,
          opacity: "0",
          delay: 1,
        },
        0
      );
    });

    return () => {
      bearAnim.kill();
      art1Anim.kill();
      art2Anim.kill();
      art3Anim.kill();
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center"
      ref={parallaxRef}
      id="ufo"
    >
      <div className="max-w-md	" ref={ufoRef}>
        <Image
          src={
            "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fai8ugwpgumlf4oekcnof&w=1080&q=75"
          }
          alt="ufo"
          height={512}
          width={512}
        />
        <Image
          style={{
            // transform: "translate(-5.5%, -19%)",%
            marginTop: "-15%",
            marginLeft: "-5.25%",
          }}
          src={
            "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fnzmphdayuateq874u2fn&w=1080&q=75"
          }
          alt="ufo-light"
          ref={ufoLight}
          height={512}
          width={512}
        />
      </div>
      <div
        ref={ufoArticles}
        className="flex flex-col gap-5 max-w-4xl text-center md:flex-row"
      >
        <article
          ref={article1}
          className="border-border flex-1 animate-float rounded-xl border bg-slate-800 bg-opacity-30 px-4 py-2 text-white opacity-80 md:py-6"
        >
          <h3 className="mr-1 bg-gradient-to-r from-[#FEC600] to-[#FDE619] bg-clip-text text-3xl font-semibold  text-transparent">
            BEX
          </h3>
          <p className="mt-2 inline md:block">
            Swap tokens and provide liquidity to earn BGT rewards.{" "}
          </p>
          <Link href={"#"} className="underline">
            Visit
          </Link>
        </article>
        <article
          ref={article2}
          className="border-border flex-1 animate-float rounded-xl border bg-slate-800 bg-opacity-30 px-4 py-2 text-white opacity-80 md:py-6"
        >
          <h3 className="mr-1 bg-gradient-to-r from-[#FEC600] to-[#FDE619] bg-clip-text text-3xl font-semibold  text-transparent">
            BEX
          </h3>
          <p className="mt-2 inline md:block">
            Swap tokens and provide liquidity to earn BGT rewards.{" "}
          </p>
          <Link href={"#"} className="underline">
            Visit
          </Link>
        </article>
        <article
          ref={article3}
          className="border-border flex-1 animate-float rounded-xl border bg-slate-800 bg-opacity-30 px-4 py-2 text-white opacity-80 md:py-6"
        >
          <h3 className="mr-1 bg-gradient-to-r from-[#FEC600] to-[#FDE619] bg-clip-text text-3xl font-semibold  text-transparent">
            BEX
          </h3>
          <p className="mt-2 inline md:block">
            Swap tokens and provide liquidity to earn BGT rewards.{" "}
          </p>
          <Link href={"#"} className="underline">
            Visit
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Ufo;
