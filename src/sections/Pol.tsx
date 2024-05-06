"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

interface Props {
  setBackgroundDark: (value: string) => void;
  setBackgroundLight: (value: string) => void;
}

const Pol = ({ setBackgroundDark, setBackgroundLight }: Props) => {
  const ball1 = useRef(null!);
  const ball2 = useRef(null!);
  const ball3 = useRef(null!);

  const cloud1 = useRef(null!);
  const cloud2 = useRef(null!);
  const cloud3 = useRef(null!);

  const text = useRef(null!);

  const parallaxRef = useRef(null!);

  useEffect(() => {
    const ball1Anim = gsap.fromTo(
      ball1.current,
      { y: 10 },
      { y: -10, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );
    const ball2Anim = gsap.fromTo(
      ball2.current,
      { y: 10 },
      { y: -10, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );
    const ball3Anim = gsap.fromTo(
      ball3.current,
      { y: 10 },
      { y: -10, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    const textAnim = gsap.fromTo(
      text.current,
      { y: -10 },
      { y: 10, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

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

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            setBackgroundLight("#5cace7");
            setBackgroundDark("#5cace7");
          },
        },
      });
    });

    return () => {
      ctx.revert();
      ball1Anim.kill();
      ball2Anim.kill();
      ball3Anim.kill();
      cloud1Anim.kill();
      cloud2Anim.kill();
      cloud3Anim.kill();
      textAnim.kill();
    };
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="relative w-full h-screen flex flex-col gap-16 items-center justify-center text-white "
    >
      <Image
        className="absolute left-[20%] top-4"
        ref={cloud1}
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fclouds%2Fjzqmdph0majfloy6frit&w=1080&q=75"
        }
        alt="cloud"
        height={800}
        width={600}
        loading="eager"
      />
      <Image
        className="absolute right-[-200px] top-64"
        ref={cloud2}
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fclouds%2Fxhte7rvze5dioycj6ayd&w=1920&q=75"
        }
        alt="cloud"
        height={800}
        width={700}
        loading="eager"
      />
      <Image
        className="absolute bottom-48 left-[-10%]"
        ref={cloud3}
        src={
          "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fclouds%2Fhy4mgihwgh8lbr03pmkb&w=1080&q=75"
        }
        alt="cloud"
        height={800}
        width={700}
        loading="eager"
      />
      <div ref={ball1} className="flex flex-col items-center gap-4">
        <div className="w-fit whitespace-nowrap rounded-xl bg-white bg-opacity-10 p-[6px] text-[10px] font-medium text-white backdrop-blur-2xl sm:text-sm md:text-xl xl:p-2">
          Solve stake centralization
        </div>
        <Image
          className="w-[60px] sm:w-[100px]"
          src={
            "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2FORB_epdyas&w=256&q=75"
          }
          alt="ball"
          height={100}
          width={100}
          loading="eager"
        />
      </div>
      <div className="grid grid-cols-3">
        <div ref={ball2} className="flex flex-col items-center gap-4">
          <div className="w-fit whitespace-nowrap rounded-xl bg-white bg-opacity-10 p-[6px] text-[10px] font-medium text-white backdrop-blur-2xl sm:text-sm md:text-xl xl:p-2">
            Solve stake centralization
          </div>
          <Image
            className="w-[60px] sm:w-[100px]"
            src={
              "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2FORB_epdyas&w=256&q=75"
            }
            alt="ball"
            height={100}
            width={100}
            loading="eager"
          />
        </div>
        <Image
          className="w-full max-w-80"
          src={
            "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fair_bender_bera_zvzjny&w=1080&q=75"
          }
          alt="Bear"
          height={512}
          width={512}
          loading="eager"
        />
        <div ref={ball3} className="flex flex-col items-center gap-4">
          <div className="w-fit whitespace-nowrap rounded-xl bg-white bg-opacity-10 p-[6px] text-[10px] font-medium text-white backdrop-blur-2xl sm:text-sm md:text-xl xl:p-2">
            Solve stake centralization
          </div>
          <Image
            className="w-[60px] sm:w-[100px]"
            src={
              "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2FORB_epdyas&w=256&q=75"
            }
            alt="ball"
            height={100}
            width={100}
            loading="eager"
          />
        </div>
      </div>
      <div
        ref={text}
        className="text-lg sm:text-2xl md:text-4xl max-w-screen-lg text-center px-8"
      >
        <span className="text-amber-300 font-semibold">Proof of Liquidity</span>{" "}
        aligns network security and liquidity by validators rewarding liquidity
        providers on Berachain with the non-purchasable staking token of the
        network.
      </div>
    </section>
  );
};

export default Pol;
