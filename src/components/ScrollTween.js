import * as ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Controller, Scene } from "react-scrollmagic";
import { Controls, PlayState, Timeline, Tween } from "react-gsap";
// import scrollmagic from "scrollmagic";
import $ from "jquery";

export default function ScrollTween(props) {
  let timer;
  const { children, tween } = props;

  const dispatch = useDispatch();
  const globalProgress = useSelector((state) => state?.global?.progress);
  const [p, setP] = useState(0);

  const elementRef = useRef();

  let controller;
  let sence;

  useEffect(() => {
    $(window).bind("resize", () => delayInit);
    return () => {
      $(window).unbind("resize", () => delayInit);
    };
  }, []);

  useEffect(() => {
    if (elementRef?.current) {
      init();
    }
  }, [elementRef?.current]);

  const tweenTarget = React.cloneElement(children, {
    ref: elementRef,
  });

  function delayInit() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      init();
    }, 300);
  }

  function init() {
    const ScrollMagic = require("scrollmagic");

    let targetNode = elementRef?.current;

    if (targetNode) {
      if (controller || sence) {
        controller.destroy(true);
        sence.destroy(true);
      }

      controller = new ScrollMagic.Controller();
      sence = new ScrollMagic.Scene({
        duration: "60%",
        triggerElement: targetNode,
        triggerHook: 0.7,
        reverse: true,
      })
        .addTo(controller)
        .on("progress", function (e) {
          setP(e.progress);
        });
    }
  }

  return (
    <Timeline
      target={tweenTarget}
      progress={p}
      playState={"pause"}
      // duration={100}
    >
      {tween && tween()}
    </Timeline>
  );
}
