import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Timeline, Tween } from "react-gsap";
import _ from "lodash";

export default function DecorateSence(props) {
  const { startProgress = 0.1, isPC = true } = useSelector(
    (state) => state?.global || {}
  );

  return (
    <>
      <div className="decorate-sence">
        <div className="l">
          <Timeline
            target={
              <img className="cloud cloud-l" src="/bg/bg_decorate_01.png" />
            }
            repeat={-1}
            progress={(startProgress + 6) / 40}
            playState={"pause"}
            duration={100}
          >
            <Tween
              from={{ scale: 2, opacity: 0 }}
              to={{ scale: 1, opacity: 1, right: "100%", bottom: "-20%" }}
            />
            <Tween to={{ opacity: 0 }} stagger={50} />
          </Timeline>

          {isPC && (
            <Timeline
              repeat={-1}
              // duration={4}
              progress={startProgress / 50}
              playState={"pause"}
            >
              <Timeline
                target={
                  <img className="tree tree-l" src="/bg/bg_decorate_04.png" />
                }
              >
                <Tween
                  delay={20}
                  duration={20}
                  from={{ opacity: 0, scale: 2, y: "100%" }}
                  to={{ opacity: 1, scale: 1, y: "0%" }}
                />
                <Tween duration={20} to={{ opacity: 1, scale: 0, y: "100%" }} />
              </Timeline>
              <Timeline
                target={
                  <img className="grass-l" src="/bg/bg_decorate_09.png" />
                }
              >
                <Tween
                  duration={20}
                  from={{ opacity: 0, scale: 2, y: "100%" }}
                  to={{ opacity: 1, scale: 1, y: "0%" }}
                />
                <Tween duration={20} to={{ opacity: 1, scale: 0, y: "50%" }} />
              </Timeline>
            </Timeline>
          )}
        </div>
        <div className="r">
          <Tween
            from={{ opacity: 0, scale: 1.2 }}
            to={{
              opacity: 1,
              scale: 0.8,
              left: "120%",
              bottom: "-20%",
            }}
            repeat={-1}
            progress={(startProgress + 5) / 40}
            playState={"pause"}
          >
            <img className="cloud cloud-r" src="/bg/bg_decorate_05.png" />
          </Tween>

          {isPC && (
            <Timeline
              repeat={-1}
              progress={startProgress / 50}
              playState={"pause"}
            >
              <Timeline
                delay={20}
                target={<img className="tree-r" src="/bg/bg_decorate_08.png" />}
              >
                <Tween
                  duration={20}
                  from={{ opacity: 0, scale: 2.5, y: "100%" }}
                  to={{ opacity: 1, scale: 1, y: "0%" }}
                />
                <Tween duration={20} to={{ opacity: 1, scale: 0, y: "50%" }} />
              </Timeline>
              <Timeline
                target={
                  <img className="grass-r" src="/bg/bg_decorate_09.png" />
                }
              >
                <Tween
                  duration={20}
                  from={{ opacity: 0, scale: 2, y: "100%" }}
                  to={{ opacity: 1, scale: 1, y: "0%" }}
                />
                <Tween duration={20} to={{ opacity: 1, scale: 0, y: "50%" }} />
              </Timeline>
            </Timeline>
          )}
        </div>
      </div>
    </>
  );
}
