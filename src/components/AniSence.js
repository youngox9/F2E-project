import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Timeline, Tween } from "react-gsap";
import $ from "jquery";
import _ from "lodash";

export default function AniSence(props) {
  let timer;
  const { children, setting = [], debug, fromStart = false } = props;
  const globalProgress = useSelector((state) => state?.global?.progress);
  const startProgress = useSelector((state) => state?.global?.startProgress);
  const [tweenArr, setTweenArray] = useState([]);

  const elementRef = useRef();

  const tweenTarget = React.cloneElement(children, {
    ref: elementRef,
  });

  useEffect(() => {
    $(window).bind("resize", initTweenArr);
    return () => {
      $(window).unbind("resize", initTweenArr);
    };
  }, []);

  useEffect(() => {
    setTweenArray([]);
    clearTimeout(timer);
    timer = setTimeout(() => {
      initTweenArr();
    }, 50);
  }, [JSON.stringify(setting)]);

  function getPosition(target) {
    const el = $(target)?.[0];
    if (!el) return null;
    const totalHeight = document.body.scrollHeight;
    const elTop = $(target).offset().top;
    const elBottom = elTop + $(target).height();

    const startP = (elTop / totalHeight) * 100;
    const endP = (elBottom / totalHeight) * 100;

    return { start: startP, end: endP };
  }

  function inserDelay(arr) {
    return arr.reduce((previous, curr, idx) => {
      const { start, end } = curr;
      const prev = arr?.[idx - 1];
      const next = arr?.[idx + 1];

      let result = [...previous];
      if (!prev && start !== 0) {
        result = [
          {
            type: "no-prev",
            delay: start,
            start: 0,
            end: start,
            duration: start,
          },
          ...result,
        ];
      } else if (prev && prev.end !== curr.start) {
        const delay = curr.start - prev.end;
        const s = prev.end;
        const e = prev.end + delay;
        const duration = e - s;
        result = [
          ...result,
          { type: "prev-empty", delay, start: s, end: e, duration },
        ];
      }
      if (!next && end !== 100) {
        const delay = 100 - end;
        const s = end;
        const e = 100;
        const duration = e - s;
        result = [
          ...result,
          curr,
          { type: "no-next", delay, start: s, end: e, duration },
        ];
      } else {
        result = [...result, curr];
      }
      return result;
    }, []);
  }

  function initTweenArr() {
    const temp = setting.reduce((res, obj, idx) => {
      const { start: s, end: e, target, duration } = obj;
      const prev = res?.[idx - 1];
      let start, end;
      if (target) {
        const pos = getPosition(target);
        if (pos) {
          start = pos.start;
          end = pos.end;
        }
      } else if (duration) {
        if (s !== undefined) {
          if (typeof s === "number") {
            start = s;
            end = s + duration;
          } else {
            const pos = getPosition(s);
            if (pos) start = pos.start;
            end = pos.start + duration;
          }
        } else {
          start = prev.end;
          end = start + duration;
        }
      } else {
        if (typeof s === "number") {
          start = s;
        } else {
          const pos1 = getPosition(s);
          start = pos1.start;
        }
        if (typeof e === "number") {
          end = e;
        } else {
          const pos2 = getPosition(e);
          end = pos2.end;
        }
      }
      return [...res, { ...obj, start, end, duration: end - start }];
    }, []);
    // console.log(temp);

    const insertArr = inserDelay(temp);
    setTweenArray(insertArr);

    if (debug) {
      const total = insertArr.reduce((prev, curr) => {
        return (prev += curr.duration);
      }, 0);

      console.log("total >>>", total, temp, insertArr);
    }
  }

  const progress = (fromStart ? startProgress : globalProgress) / 100;

  if (!tweenArr?.length) {
    return children;
  }

  return (
    <Timeline
      target={children}
      progress={progress}
      playState={"pause"}
      duration={100}
    >
      {tweenArr.map((o, idx) => {
        return <Tween {...o} key={idx} />;
      })}
    </Timeline>
  );
}
