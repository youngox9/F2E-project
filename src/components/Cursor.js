import React from "react";
import { useSelector } from "react-redux";
import { clsx } from "clsx";
import Sprite from "@/components/Sprite";
import AniSence from "@/components/AniSence";
import ScrollTween from "@/components/ScrollTween";
import styled from "styled-components";
import { useMousePosition } from "@/hook";

const CursorItem = styled.div`
  position: fixed;
  pointer-events: none;
  width: 30px;
  height: 30px;
  z-index: 99999;
  background: url("/cursor/cursor_2x.png") center/contain no-repeat;
`;

export default function Banner(props) {
  const {} = props;

  const mousePosition = useMousePosition();

  const {
    startProgress,
    isMobile = false,
    isPC = false,
  } = useSelector((state) => state?.global || {});

  return (
    isPC && (
      <CursorItem style={{ left: mousePosition.x, top: mousePosition.y }} />
    )
  );
}
