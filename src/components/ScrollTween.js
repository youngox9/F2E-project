import React from "react";

import { ScrollTrigger } from "react-gsap";

export default function ScrollTween(props) {
  const { children } = props;

  return (
    <ScrollTrigger
      start="bottom 100%"
      end="bottom 70%"
      scrub={1}
      // markers
      {...props}
    >
      {children}
    </ScrollTrigger>
  );
}
