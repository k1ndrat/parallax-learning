"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Community = () => {
  const bear = useRef(null!);
  const discord = useRef(null!);
  const telegram = useRef(null!);
  const opensea = useRef(null!);
  const twitter = useRef(null!);
  const github = useRef(null!);
  const settings = useRef(null!);

  useEffect(() => {
    const bearAnim = gsap.fromTo(
      bear.current,
      { y: 20 },
      { y: -20, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    const disAnim = gsap.fromTo(
      discord.current,
      { y: -5 },
      { y: 5, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    const tgAnim = gsap.fromTo(
      telegram.current,
      { y: -10 },
      {
        y: 10,
        duration: 2,
        delay: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );

    const osAnim = gsap.fromTo(
      opensea.current,
      { y: 5 },
      { y: -5, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    const twAnim = gsap.fromTo(
      twitter.current,
      { y: 7 },
      {
        y: -7,
        duration: 2,
        delay: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );

    const githubAnim = gsap.fromTo(
      github.current,
      { y: -5 },
      { y: 5, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    const settAnim = gsap.fromTo(
      settings.current,
      { y: -8 },
      {
        y: 8,
        duration: 2,
        delay: 0.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );

    return () => {
      bearAnim.kill();
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="relative max-w-[65%] sm:max-w-md">
        {/* Commurity img */}
        <Image
          src={
            "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fnbmzq5p1u1nbuytycmyg&w=3840&q=75"
          }
          alt="community-img"
          width={1024}
          height={1024}
          loading="eager"
        />

        {/* bear */}
        <div
          ref={bear}
          className="absolute bottom-0 right-[-50px] w-[60%] md:bottom-[-50px] md:right-[-150px]"
        >
          <a target="_blank" href="https://discord.gg/berachain">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fabqllf4qo4unsut9hxlz&w=3840&q=75"
              }
              alt="discord"
              width={1024}
              height={1024}
              loading="eager"
            />
          </a>
        </div>

        {/* discord */}
        <div
          ref={discord}
          className="lg:top[45%] absolute -right-[40px] top-[15%] w-[20%] lg:right-[-100px] text-white"
        >
          <a target="_blank" href="https://discord.gg/berachain">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fnrifpnbzq6fdxbftfi71&w=256&q=75"
              }
              alt="discord"
              width={256}
              height={256}
              loading="eager"
            />
          </a>
        </div>

        {/* X */}
        <div ref={twitter} className="absolute left-[30%] top-[-50px] w-[20%]">
          <a target="_blank" href="https://discord.gg/berachain">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2Ffoundation%2Fatjtbkm3nu5chferwfau&w=256&q=75"
              }
              alt="twitter"
              width={256}
              height={256}
              loading="eager"
            />
          </a>
        </div>

        {/* telegram */}
        <div ref={telegram} className="absolute top-[70%] right-[0%] w-[15%]">
          <a target="_blank" href="https://discord.gg/berachain">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fjqvgrkaimnqhqpynjquo&w=256&q=75"
              }
              alt="telegram"
              width={256}
              height={256}
              loading="eager"
            />
          </a>
        </div>

        {/* opensea */}
        <div
          ref={opensea}
          className="absolute bottom-[-100px] left-[40%] w-[20%]"
        >
          <a target="_blank" href="https://discord.gg/berachain">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fvucwotsdllr5u8iyyhfq&w=256&q=75"
              }
              alt="opensea"
              width={256}
              height={256}
              loading="eager"
            />
          </a>
        </div>

        {/* github */}
        <div
          ref={github}
          className="absolute bottom-[0%] -left-[30px] w-[20%] lg:left-[-100px]"
        >
          <a target="_blank" href="https://discord.gg/berachain">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fql2nmmduzskuv1nu88gi&w=256&q=75"
              }
              alt="github"
              width={256}
              height={256}
              loading="eager"
            />
          </a>
        </div>

        {/* settings */}
        <div ref={settings} className="absolute top-[30%] -left-[20%] w-[20%]">
          <a target="_blank" href="https://discord.gg/berachain">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fsvwzslytkfs9zkj5ppes&w=256&q=75"
              }
              alt="settings"
              width={256}
              height={256}
              loading="eager"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
