import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Controls, PlayState, Timeline, Tween } from "react-gsap";
import $ from "jquery";
import { clsx } from "clsx";

import ScrollTween from "@/components/ScrollTween";

import AnimalSence from "@/components/AnimalSence";
import DecorateSence from "@/components/DecorateSence";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import { useScroll } from "@/hook";

export default function Banner(props) {
  const {} = props;
  const dispatch = useDispatch();
  const globalProgress = useSelector((state) => state?.global?.progress);

  const { startProgress, isPC } = useSelector((state) => state?.global);

  useScroll((config) => {
    dispatch({ type: "SET_SCROLL_PROGRESS", ...config });
  });

  // from={{ opacity: 0, scale: 0.5 }}
  // to={{ opacity: 1, scale: 1 }}

  const tit_ani = isPC
    ? {
        from: { opacity: 0, scale: 0.5 },
        to: { opacity: 1, scale: 1 },
      }
    : {
        from: { opacity: 0 },
        to: { opacity: 1 },
      };

  return (
    <>
      <Cursor />
      <a
        className="logo"
        href="https://2022.thef2e.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={clsx("pc", globalProgress > 10 && "active")}
          src="logo/logo.png"
        />
        <img className="m" src="logo/logo_text.png" />
      </a>

      <div className={clsx("traffic-light", startProgress > 5 && "active")}>
        <p>{startProgress > 4 ? "GO !" : "Ready ?"}</p>
        <div className="light-bar">
          <img className="bk" src="/main/ready_frame.png" />
          {startProgress > 3 && (
            <img className="light light-1" src="/main/ready_1.png" />
          )}
          {startProgress > 2 && (
            <img className="light light-2" src="/main/ready_2.png" />
          )}
          {startProgress > 1 && (
            <img className="light light-3" src="/main/ready_3.png" />
          )}
        </div>
      </div>
      <a
        className="profile-btn hover-pic"
        href="https://2022.thef2e.com/users"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/btn/btn_user.png" />
        <img className="h" src="/btn/btn_user_h.png" />
      </a>
      <a
        className="join-btn "
        href="https://2022.thef2e.com/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="f2e-btn active">
          <p>Join</p>
          <div className="f2e-btn-pic">
            <img src="/btn/btn_join.png" />
            <img className="h" src="/btn/btn_join_h.png" />
          </div>
        </div>
      </a>
      <div className="container">
        <div className="content">
          <Map />
          <DecorateSence />
          <Navbar />

          <AnimalSence />
          <div className="delay-sence" />
          <div className="sence sence-1">
            <ScrollTween>
              <div className="tit">
                <Tween target="img" {...tit_ani}>
                  <img className="pc" src="/kv2_tit.svg" />
                  <img className="m" src="/kv2_tit_m.svg" />
                </Tween>
              </div>
            </ScrollTween>
            <ScrollTween>
              <div className="flex">
                <div className="flex-col">
                  <Tween
                    target=".quest-box"
                    from={{ opacity: 0, y: "50%", scale: 0 }}
                    to={{ opacity: 1, y: "0%", scale: 1 }}
                  >
                    <div className="quest-box">
                      <p>羨慕別人的酷酷網頁動畫？</p>
                      <img className="pc" src="/main/question_1.png" />
                      <img className="m" src="/main/question_1_m.png" />
                    </div>
                  </Tween>
                </div>

                <div className="flex-col">
                  <Tween
                    target=".quest-box"
                    from={{ opacity: 0, y: "50%", scale: 0 }}
                    to={{ opacity: 1, y: "0%", scale: 1 }}
                  >
                    <div className="quest-box">
                      <p>滿足不了同事的許願？</p>
                      <img className="pc" src="/main/question_2.png" />
                      <img className="m" src="/main/question_2_m.png" />
                    </div>
                  </Tween>
                </div>

                <div className="flex-col">
                  <Tween
                    target=".quest-box"
                    from={{ opacity: 0, y: "50%", scale: 0 }}
                    to={{ opacity: 1, y: "0%", scale: 1 }}
                  >
                    <div className="quest-box">
                      <p>動畫技能樹太雜無從下手？</p>
                      <img className="pc" src="/main/question_3.png" />
                      <img className="m" src="/main/question_3_m.png" />
                    </div>
                  </Tween>
                </div>
              </div>
            </ScrollTween>
          </div>

          <div className="sence sence-2">
            <ScrollTween>
              <div className="tit">
                <Tween target="img" {...tit_ani}>
                  <img className="pc" src="/kv3_tit.svg" />
                  <img className="m" src="/kv3_tit_m.svg" />
                </Tween>
              </div>
            </ScrollTween>
            <ScrollTween>
              <div className="flex">
                <Tween
                  target=".btn"
                  stagger={0.1}
                  from={{ opacity: 0, scale: 0 }}
                  to={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex-col m">
                    <img src="/character/character_f2e.gif" />
                  </div>

                  <div className="flex-col">
                    <a
                      className="f2e-btn"
                      href="https://2022.thef2e.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="f2e-btn-pic">
                        <img src="/btn/btn_join.png" />
                        <img className="h" src="/btn/btn_join_h.png" />
                      </div>
                      <p>前端工程師</p>
                    </a>
                  </div>

                  <div className="flex-col">
                    <a
                      className="f2e-btn"
                      href="https://2022.thef2e.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="f2e-btn-pic">
                        <img src="/btn/btn_join.png" />
                        <img className="h" src="/btn/btn_join_h.png" />
                      </div>
                      <p>UI設計師</p>
                    </a>
                  </div>

                  <div className="flex-col m">
                    <img src="/character/character_ui.gif" />
                  </div>

                  <div className="flex-col m">
                    <img src="/character/character_team.gif" />
                  </div>

                  <div className="flex-col">
                    <a
                      className="f2e-btn"
                      href="https://2022.thef2e.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="f2e-btn-pic">
                        <img src="/btn/btn_join.png" />
                        <img className="h" src="/btn/btn_join_h.png" />
                      </div>
                      <p>團體組(UI+前端)</p>
                    </a>
                  </div>
                </Tween>
              </div>
            </ScrollTween>
          </div>
          <div className="sence sence-3">
            <ScrollTween>
              <div className="tit">
                <Tween
                  target={"img"}
                  {...tit_ani}
                  // ease="elastic.out(0.2, 0.1)"
                >
                  <img className="pc" src="/kv4_tit.svg" />
                  <img className="m" src="/kv4_tit_m.svg" />
                </Tween>
              </div>
            </ScrollTween>

            <div className="week-list">
              <ScrollTween>
                <div className="week-item">
                  <Tween
                    from={{ opacity: 0, scaleY: 0.5, x: "-25%" }}
                    to={{ opacity: 1, scaleY: 1, x: "0%" }}
                  >
                    <div className="week-item-box">
                      <div className="week-item-pic">
                        <img src="/main/week_1.png" />
                      </div>
                      <div className="week-item-content">
                        <h4>WEEK 1</h4>
                        <p>The F2E 活動網站設計</p>
                        <div className="inline-btns">
                          <a className="border-btn">Parallax Scrolling</a>
                          <a className="border-btn">#版塊設計</a>
                        </div>
                        <a
                          className="border-btn link"
                          href="https://2022.thef2e.com/news/week1"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          查看關卡細節
                        </a>
                      </div>
                    </div>
                  </Tween>
                </div>
              </ScrollTween>
              <ScrollTween>
                <div className="week-item">
                  <Tween
                    from={{ opacity: 0, scaleY: 0.5, x: "25%" }}
                    to={{ opacity: 1, scaleY: 1, x: "0%" }}
                  >
                    <div className="week-item-box week-item-right">
                      <div className="week-item-pic m">
                        <img src="/main/week_2.png" />
                      </div>
                      <div className="week-item-content">
                        <h4>WEEK 2</h4>
                        <p>今晚，我想來點點簽</p>
                        <div className="inline-btns">
                          <a className="border-btn">Canvas</a>
                          <a className="border-btn">#凱鈿行動科技</a>
                        </div>
                        <a
                          className="border-btn link"
                          href="https://2022.thef2e.com/news/week2"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          查看關卡細節
                        </a>
                      </div>
                      <div className="week-item-pic pc">
                        <img src="/main/week_2.png" />
                      </div>
                    </div>
                  </Tween>
                </div>
              </ScrollTween>
              <ScrollTween>
                <div className="week-item">
                  <Tween
                    from={{ opacity: 0, scaleY: 0.5, x: "-25%" }}
                    to={{ opacity: 1, scaleY: 1, x: "0%" }}
                  >
                    <div className="week-item-box">
                      <div className="week-item-pic">
                        <img src="/main/week_3.png" />
                      </div>
                      <div className="week-item-content">
                        <h4>WEEK 3</h4>
                        <p>Scrum 新手村</p>
                        <div className="inline-btns">
                          <a className="border-btn">JS draggable</a>
                          <a className="border-btn">#鈦坦科技</a>
                        </div>
                        <a
                          className="border-btn link"
                          href="https://2022.thef2e.com/news/week3"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          查看關卡細節
                        </a>
                      </div>
                    </div>
                  </Tween>
                </div>
              </ScrollTween>
            </div>
          </div>
          <div className="sence sence-4">
            <div className="flex-row">
              <ScrollTween
                tween={() => {
                  return (
                    <Tween
                      from={{ scale: 0.5, opacity: 0, rotation: -45 }}
                      to={{ scale: 1, opacity: 1, rotation: 0 }}
                      stagger={3}
                    />
                  );
                }}
              >
                <div className="flex-col">
                  <img className="icon" src="/date_icon_1.svg" />
                  <h4>SIGN UP</h4>
                  <div className="date">10/13 - 11/6</div>
                  <p>截止前可修改報名組別</p>
                </div>
              </ScrollTween>
              <ScrollTween
                tween={() => {
                  return (
                    <Tween
                      from={{ scale: 0.5, opacity: 0, rotation: 0 }}
                      to={{
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        delay: 0.3,
                      }}
                      stagger={3}
                    />
                  );
                }}
              >
                <div className="flex-col">
                  <img className="icon" src="/date_icon_2.svg" />
                  <h4>START</h4>
                  <div className="date">10/13 - 11/6</div>
                  <p>
                    10/31(一) UI、團體組開賽
                    <br />
                    11/7(一) 前端組開賽
                  </p>
                </div>
              </ScrollTween>
              <ScrollTween
                tween={() => {
                  return (
                    <Tween
                      from={{ scale: 0.5, opacity: 0, rotation: 45 }}
                      to={{
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        delay: 0.3,
                      }}
                      stagger={3}
                    />
                  );
                }}
              >
                <div className="flex-col">
                  <img className="icon" src="/date_icon_3.svg" />
                  <h4>UPLOAD</h4>
                  <div className="date">10/13 - 11/6</div>
                  <p>
                    依賽程登錄作品
                    <br />
                    <span>額外競賽： 主題豐厚獎金等著你</span>
                  </p>
                </div>
              </ScrollTween>
            </div>
          </div>

          <ScrollTween>
            <div className="sence sence-5">
              <Tween
                from={{
                  opacity: 0,
                  rotation: 180,
                  y: "-50%",
                  scale: 2,
                }}
                to={{ opacity: 1, rotation: 0, y: "0%", scale: 1 }}
              >
                <h4>
                  區區修煉
                  <br className="m" />
                  已經無法滿足了嗎？
                </h4>
              </Tween>
            </div>
          </ScrollTween>

          <div className="sence sence-6">
            <ScrollTween>
              <div className="tit">
                <Tween target="img" {...tit_ani}>
                  <img className="pc" src="/kv7_tit.svg" />
                  <img className="m" src="/kv7_tit_m.svg" />
                </Tween>
              </div>
            </ScrollTween>
            <ScrollTween>
              <div className="reward">
                <Tween from={{ scale: 0 }} to={{ scale: 1 }}>
                  <div className="reward-pic">
                    <img src="/main/award_trophy.png" />
                  </div>
                </Tween>
                <div className="reward-content">
                  <Tween
                    stagger={0.2}
                    from={{ opacity: 0, x: "-20%" }}
                    to={{ opacity: 1, x: "0%" }}
                  >
                    <h4>評審機制</h4>
                    <p>
                      初選： 將由六角學院前端、UI 評審進行第一波篩選。
                      <br />
                      決選： 由六角學院與贊助廠商討論，進行最後篩選，並於
                      12/30(五) 由評審進行直播公布名單！
                    </p>

                    <h4>獎項</h4>

                    <p>
                      1. 初選佳作 共六十位 數位獎狀 <br />
                      2. 個人企業獎 共六位 NTD <span>3,000</span> /位 <br />
                      3. 團體企業獎 共三組 NTD <span>10,000</span> /組
                      <br />
                      4. 以上皆提供完賽數位獎狀 <br />
                    </p>
                  </Tween>
                </div>
              </div>
            </ScrollTween>
          </div>
          <div className="sence sence-7">
            <ScrollTween>
              <div className="tit">
                <Tween target="img" {...tit_ani}>
                  <img className="pc" src="/kv8_tit.svg" />
                  <img className="m" src="/kv8_tit_m.svg" />
                </Tween>
              </div>
            </ScrollTween>
            <ScrollTween>
              <div className="sponsor">
                <Tween stagger={0.2} {...tit_ani}>
                  <div className="sponsor-item">
                    <img src="/main/logo_blockstudio.png" />
                    <a className="border-btn">#版塊設計</a>
                  </div>
                  <div className="sponsor-item">
                    <img src="/main/logo_kdanmobile.png" />
                    <a className="border-btn">#鈦坦科技</a>
                  </div>
                  <div className="sponsor-item">
                    <img src="/main/logo_titansoft.png" />
                    <a className="border-btn">#凱鈿科技</a>
                  </div>
                </Tween>
              </div>
            </ScrollTween>
          </div>
          <div className="sence sence-8"></div>
          <div className="sence sence-9">
            <img className="finish-logo" src="/logo/logo.png" />
            <a
              className="f2e-btn"
              href="https://2022.thef2e.com/works/create"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="f2e-btn-pic">
                <img src="/btn/btn_join.png" />
                <img className="h" src="/btn/btn_join_h.png" />
              </div>
              <p>立即報名</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
