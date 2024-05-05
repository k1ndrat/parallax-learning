"use client";

import React, { memo, useEffect, useRef, useState } from "react";

const Stars = memo(({ height }: { height: number }) => {
  const stars = useRef<HTMLDivElement>(null!);

  const [starsHeight, setStarsHeight] = useState(0);
  useEffect(() => {
    setStarsHeight(4000 + 2 * window.innerHeight);
  }, []);

  console.log(starsHeight);
  return (
    <div
      ref={stars}
      id="stars"
      className="absolute w-full"
      style={{ height: `${starsHeight}px` }}
    >
      {Array(200)
        .fill(null)
        .map((_, index) => (
          <Star
            key={index}
            containerHeight={starsHeight}
            containerwidth={stars.current?.offsetWidth}
          />
        ))}
    </div>
  );
});

const Star = ({
  containerHeight,
  containerwidth,
}: {
  containerHeight: number;
  containerwidth: number;
}) => {
  const x = Math.floor(Math.random() * containerwidth) | 0;
  const y = Math.floor(Math.random() * containerHeight) | 0;

  const delay = Math.random() * 0.7;

  const size = Math.random() * 5;

  return (
    <span
      className="absolute bg-white block star-animate"
      style={{
        top: y,
        left: x,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
      }}
    ></span>
  );
};

export default Stars;
