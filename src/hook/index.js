import { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import $ from "jquery";

export const useThrottle = (callback = () => {}, value = [], time = 100) => {
  useEffect(() => {
    onThrottle();
  }, [JSON.stringify(value)]);

  const onThrottle = useCallback(
    _.throttle(() => {
      callback();
    }, time),
    []
  );
};

export const useScroll = (callback = () => {}) => {
  useEffect(() => {
    $(window).bind("scroll resize", onScroll);
    onScroll();
    return () => {
      $(window).unbind("scroll resize", onScroll);
    };
  }, []);

  function onScroll() {
    const s = $(window).scrollTop(),
      d = document.body.scrollHeight,
      c = $(window).height(),
      screenWidth = $(window).width(),
      isMobile = $(window).width() <= 768,
      isPC = !isMobile;

    const progress = ((s + c) / d) * 100;
    const startProgress = (s / (d - c)) * 100;
    // console.log(progress);
    callback({ progress, startProgress, screenWidth, isMobile, isPC });
  }
};

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}
