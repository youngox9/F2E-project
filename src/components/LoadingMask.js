import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clsx } from "clsx";
import Sprite from "@/components/Sprite";
import AniSence from "@/components/AniSence";
import ScrollTween from "@/components/ScrollTween";

export default function Loading(props) {
  const dispatch = useDispatch();
  const showLoading = useSelector((state) => state?.global?.showLoading);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "SET_SHOW_LOADING", showLoading: false });
    }, 2500);
  }, []);
  return <div className={clsx("loading", !showLoading && "hidden")} />;
}
