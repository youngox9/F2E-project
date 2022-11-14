import React, { useEffect, useRef, useState } from "react";

import { ScrollTrigger } from "react-gsap";
// import scrollmagic from "scrollmagic";

export default function ScrollTween(props) {
  const { children } = props;

  return (
    <ScrollTrigger
      start="bottom 100%"
      end="center center"
      scrub={0.4}
      // markers
      {...props}
    >
      {children}
    </ScrollTrigger>
  );
}
