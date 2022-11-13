import * as ReactDOM from "react-dom";
import React, { useEffect, useCallback, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Controller, Scene } from "react-scrollmagic";
import { Controls, PlayState, Timeline, Tween } from "react-gsap";
// import scrollmagic from "scrollmagic";
import { useThrottle } from "@/hook";
import $ from "jquery";
import _ from "lodash";

export default function Sprite(props) {
  const globalProgress = useSelector((state) => state?.global?.progress);
  const { sprite = [] } = props;

  const [idx, setIdx] = useState(0);

  let updater = 0;

  useThrottle(() => {
    updater = updater + 1;
    const i = updater % sprite.length;
    setIdx(i);
  }, [globalProgress]);

  const src = sprite?.[idx];
  if (!src) return null;

  return <img src={src} {...props} />;
}
