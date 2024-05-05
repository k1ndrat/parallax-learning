"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const Investors = () => {
  const investors1 = useRef<HTMLDivElement>(null!);
  const investors2 = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const investor1Anim = gsap.fromTo(
      investors1.current,
      { x: `${investors1.current.scrollWidth}px` },
      {
        x: `-${investors1.current.scrollWidth}px`,
        duration: 20,
        delay: -10,
        repeat: -1,
        ease: "none",
      }
    );
    const investor2Anim = gsap.fromTo(
      investors2.current,
      { x: `${investors2.current.scrollWidth}px` },
      {
        x: `-${investors2.current.scrollWidth}px`,
        duration: 20,
        repeat: -1,
        ease: "none",
      }
    );

    return () => {
      investor1Anim.kill();
      investor2Anim.kill();
    };
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-24">
      <h2 className="mb-12 text-3xl xl:text-5xl">
        Backed by the <span className="text-amber-300 font-semibold">BEST</span>
      </h2>
      <div className="relative max-w-screen-2xl overflow-hidden">
        <div ref={investors1} className="flex gap-4">
          <div className="shrink-0">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Finvestors%2Fe88zgggibncapbslj6k9&w=640&q=75"
              }
              alt="Tribe Capital"
              height={200}
              width={300}
            />
          </div>
          <div className="shrink-0">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Finvestors%2Fe88zgggibncapbslj6k9&w=640&q=75"
              }
              alt="Tribe Capital"
              height={200}
              width={300}
            />
          </div>
          <div className="shrink-0">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Finvestors%2Fe88zgggibncapbslj6k9&w=640&q=75"
              }
              alt="Tribe Capital"
              height={200}
              width={300}
            />
          </div>
          <div className="shrink-0">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Finvestors%2Fe88zgggibncapbslj6k9&w=640&q=75"
              }
              alt="Tribe Capital"
              height={200}
              width={300}
            />
          </div>
          <div className="shrink-0">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Finvestors%2Fe88zgggibncapbslj6k9&w=640&q=75"
              }
              alt="Tribe Capital"
              height={200}
              width={300}
            />
          </div>
        </div>

        {/* COPY */}

        <div ref={investors2} className="flex gap-4 absolute top-0">
          <div className="shrink-0">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Finvestors%2Fe88zgggibncapbslj6k9&w=640&q=75"
              }
              alt="Tribe Capital"
              height={200}
              width={300}
            />
          </div>
          <div className="shrink-0">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Finvestors%2Fe88zgggibncapbslj6k9&w=640&q=75"
              }
              alt="Tribe Capital"
              height={200}
              width={300}
            />
          </div>
          <div className="shrink-0">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Finvestors%2Fe88zgggibncapbslj6k9&w=640&q=75"
              }
              alt="Tribe Capital"
              height={200}
              width={300}
            />
          </div>
          <div className="shrink-0">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Finvestors%2Fe88zgggibncapbslj6k9&w=640&q=75"
              }
              alt="Tribe Capital"
              height={200}
              width={300}
            />
          </div>
          <div className="shrink-0">
            <Image
              src={
                "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Finvestors%2Fe88zgggibncapbslj6k9&w=640&q=75"
              }
              alt="Tribe Capital"
              height={200}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
