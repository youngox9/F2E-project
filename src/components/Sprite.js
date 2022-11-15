import React, { useState } from "react";
import { useSelector } from "react-redux";
// import scrollmagic from "scrollmagic";
import { useThrottle } from "@/hook";
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
