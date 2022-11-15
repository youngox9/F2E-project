import React from "react";
import { useSelector } from "react-redux";
import { clsx } from "clsx";
import Sprite from "@/components/Sprite";
import AniSence from "@/components/AniSence";
import ScrollTween from "@/components/ScrollTween";

export default function AnimalSence(props) {
  const {} = props;

  const {
    startProgress,
    isMobile = false,
    isPC = false,
  } = useSelector((state) => state?.global || {});

  const start_gate_ani = isPC
    ? [
        {
          start: ".delay-sence ",
          duration: 6,
        },
        {
          duration: 20,
          from: { scale: 1, opacity: 1 },
          to: { scale: 0, opacity: 0 },
        },
      ]
    : [];

  return (
    <>
      <div className="start-content-sence">
        <div className="start-content">
          <AniSence setting={start_gate_ani}>
            <div className="sence-box">
              <img className="start-gate" src="/main/start_1.png" />
              <div className="brand">
                <img className="pc" src="/logo/logo_text.png" />
                <img className="m" src="/logo/logo.png" />
              </div>

              <img className="subtit" src="/logo_subtit.svg" />
              <div className="flex-row">
                <div className="flex-col">
                  <p>前端工程師</p>
                  <div className="count">920</div>
                </div>
                <div className="flex-col">
                  <p>UI設計師 </p>
                  <div className="count">110</div>
                </div>
                <div className="flex-col">
                  <p>團體組</p>
                  <div className="count">41</div>
                </div>
              </div>
            </div>
          </AniSence>
        </div>
      </div>
      <div className="animal-sence">
        <AniSence
          setting={
            isPC
              ? [
                  {
                    start: ".delay-sence ",
                    duration: 20,
                    to: { scale: 0.6 },
                  },
                  {
                    start: ".sence-5",
                    duration: 10,
                    to: { scale: 1 },
                  },
                  {
                    target: ".sence-6",
                    to: { scale: 0.6 },
                  },
                  {
                    target: ".sence-8",
                    to: { scale: 1 },
                  },
                ]
              : []
          }
        >
          <div className="sence-box">
            {/* 三隻奇怪動物 */}
            <AniSence
              setting={[
                {
                  start: 10,
                  duration: 10,
                  from: {
                    rotation: 0,
                  },
                  to: {
                    rotation: 4,
                    y: "4%",
                  },
                },
                {
                  start: 30,
                  duration: 10,
                  from: {
                    rotation: 0,
                  },
                  to: {
                    rotation: -4,
                    y: "4%",
                  },
                },
                {
                  duration: 10,
                  from: {
                    rotation: 0,
                  },
                  to: {
                    rotation: -6,
                    y: "6%",
                  },
                },
                {
                  start: 55,
                  duration: 20,
                  from: {
                    rotation: 0,
                  },
                  to: {
                    rotation: 6,
                    y: "6%",
                  },
                },
                {
                  duration: 10,

                  to: {
                    rotation: 0,
                    y: "0%",
                  },
                },
              ]}
            >
              <div className="animals">
                <AniSence
                  setting={[
                    {
                      start: ".sence-8",
                      duration: 10,
                    },
                    {
                      duration: 20,

                      to: {
                        scale: 2,
                        y: "120%",
                      },
                    },
                  ]}
                >
                  <div className="animals">
                    <Sprite
                      className="item animal animal-1"
                      sprite={[
                        "/character/character_f2e_1.png",
                        "/character/character_f2e_2.png",
                        "/character/character_f2e_3.png",
                      ]}
                    />
                    <Sprite
                      className="item animal animal-2"
                      sprite={[
                        "/character/character_ui_1.png",
                        "/character/character_ui_2.png",
                        "/character/character_ui_3.png",
                      ]}
                    />
                    <Sprite
                      className="item animal animal-3"
                      sprite={[
                        "/character/character_team_1.png",
                        "/character/character_team_2.png",
                        "/character/character_team_3.png",
                      ]}
                    />
                  </div>
                </AniSence>
                <img className="item road" src="/road.png" />
              </div>
            </AniSence>

            {/* 終點門 */}
            {isPC && (
              <AniSence
                setting={[
                  {
                    start: ".sence-8",
                    duration: 10,
                    from: { opacity: 0, scale: 2, y: "50%" },
                    to: { opacity: 1, scale: 1, y: "0%" },
                  },
                  {
                    duration: 20,
                    to: { opacity: 0, scale: 0 },
                  },
                ]}
              >
                <img className="finish-gate" src="/finish.png" />
              </AniSence>
            )}
          </div>
        </AniSence>

        {/* 終點線 */}
        {isPC && (
          <AniSence
            setting={[
              {
                start: ".sence-8",
                duration: 5,
                from: { opacity: 0, y: "100%" },
                to: { opacity: 1, y: "0%" },
              },
            ]}
          >
            <div className="finish-line">
              <AniSence
                setting={[
                  {
                    start: ".sence-8",
                    duration: 8,
                  },
                  {
                    duration: 5,
                    to: {
                      x: "-100%",
                      rotation: -12,
                    },
                  },
                ]}
              >
                <img className="l" src="/finishLine_l.png" />
              </AniSence>
              <AniSence
                setting={[
                  {
                    start: ".sence-8",
                    duration: 8,
                  },
                  {
                    duration: 5,
                    to: {
                      x: "100%",
                      rotation: 12,
                    },
                  },
                ]}
              >
                <img className="r" src="/finishLine_r.png" />
              </AniSence>
            </div>
          </AniSence>
        )}
      </div>
    </>
  );
}
