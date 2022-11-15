import React from "react";

import { ScrollTrigger } from "react-gsap";

export default function ScrollTween(props) {
  const { children } = props;

  return (
    <ScrollTrigger
      start="bottom 95%"
      end="bottom 70%"
      scrub={0.5}
      // markers
      {...props}
    >
      {children}
    </ScrollTrigger>
  );
}
