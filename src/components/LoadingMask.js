import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clsx } from "clsx";
import { createGlobalStyle } from "styled-components";
import { Tween } from "react-gsap";

export async function waitForFontLoad(font = "Gen Jyuu Gothic") {
  let timer = null;
  let timer2 = null;
  return new Promise((resolve, reject) => {
    clearInterval(timer);
    clearTimeout(timer2);
    timer = setInterval(() => {
      const isLoaded = document.fonts.check(`12px ${font}`);
      if (isLoaded) {
        clearInterval(timer);
        resolve(true);
      }
    }, 10);

    timer2 = setTimeout(() => {
      clearTimeout(timer2);
      resolve(true);
    }, 4000);
  });
}

const GlobalStyle = createGlobalStyle`
  html, body {
   position: fixed;
  }
`;

const LOAD_TIME = 2.5;

export default function Loading(props) {
  const dispatch = useDispatch();
  const showLoading = useSelector((state) => state?.global?.showLoading);

  useEffect(() => {
    waitForFontLoad();
    setTimeout(() => {
      dispatch({ type: "SET_SHOW_LOADING", showLoading: false });
    }, LOAD_TIME * 1000);
  }, []);
  return (
    <>
      {showLoading ? <GlobalStyle /> : null}
      <div className={clsx("loading", !showLoading && "hidden")}>
        <img src="/main/all.svg" />
        <div className="progress-bar">
          <Tween to={{ x: "0%" }} duration={LOAD_TIME} ease="ease-in-out">
            <span></span>
          </Tween>
        </div>
      </div>
    </>
  );
}
