import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Tween } from "react-gsap";
import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const SVGItem = styled.svg`
  overflow: visible;
  .circle {
    animation: circle-scale-out 1s ease 0s infinite both;
    transform-origin: center center;
    &.circle-1 {
      transform-origin: 20px 70px;
    }
    &.circle-2 {
      transform-origin: 20px 70px;
    }
    @keyframes circle-scale-out {
      0% {
        opacity: 1;
        transform: scale(0);
      }
      70% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: scale(3);
      }
    }
  }
`;

export default function Map(props) {
  const {} = props;

  const { startProgress = 0, isPC } = useSelector(
    (state) => state?.global || {}
  );

  console.log((startProgress + 71.5) / 100);
  return (
    <>
      <SVGItem
        className="map"
        viewBox="0 0 260 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="map-path"
          d="M49.5509 25.4027C79.0557 8.30417 111.351 21.2606 123.811 29.8762C137.268 36.9175 160.692 25.4027 178.136 29.8762C195.579 34.3496 198.071 29.8762 219.502 29.8762C240.933 29.8762 253.393 37.829 237.444 45.7818C221.496 53.7346 206.544 78.0901 202.557 81.0724C198.57 84.0547 184.615 84.0547 170.66 97.4751C156.705 110.895 177.773 45.7818 161.689 45.7818C145.605 45.7818 153.715 98.4692 144.744 107.416C130.789 121.333 99.8882 137.239 92.4124 151.157C84.9365 165.074 85.6212 152.275 55.5314 132.269C25.4416 112.263 20.1458 92.0075 20.1458 84.0547L20.1458 83.9747C20.1454 75.879 20.144 42.4445 49.5509 25.4027Z"
          stroke="#FFE2A9"
          strokeWidth="10"
        />
        <circle
          cx="20"
          cy="70"
          r="7.5"
          fill="#007FAB"
          stroke="#FFE2A9"
          strokeWidth="5"
        />
        <circle
          cx="61.6667"
          cy="20"
          r="7.5"
          fill="#FFC37D"
          stroke="#FFE2A9"
          strokeWidth="5"
        />
        <circle
          cx="131.667"
          cy="30"
          r="7.5"
          fill="#FFC37D"
          stroke="#FFE2A9"
          strokeWidth="5"
        />
        <circle
          cx="211.667"
          cy="30"
          r="7.5"
          fill="#FFC37D"
          stroke="#FFE2A9"
          strokeWidth="5"
        />
        <circle
          cx="201.667"
          cy="80"
          r="7.5"
          fill="#FFC37D"
          stroke="#FFE2A9"
          strokeWidth="5"
        />
        <circle
          cx="146.667"
          cy="105"
          r="7.5"
          fill="#FFC37D"
          stroke="#FFE2A9"
          strokeWidth="5"
        />
        <circle
          cx="101.667"
          cy="140"
          r="7.5"
          fill="#FFC37D"
          stroke="#FFE2A9"
          strokeWidth="5"
        />
        <circle
          cx="46.6667"
          cy="125"
          r="7.5"
          fill="#007FAB"
          stroke="#FFE2A9"
          strokeWidth="5"
        />
        {/*  */}
        <Tween
          repeat="-1"
          progress={(startProgress + 71.5) / 100}
          playState={"pause"}
          duration={50}
          to={{
            motionPath: {
              align: "#map-path",
              path: "#map-path",
              alignOrigin: [0.6, 0.5],
            },
          }}
        >
          <g>
            <circle cx="20" cy="70" r="5" fill="#FF5136" />
            <circle
              className="circle circle-1"
              cx="20"
              cy="70"
              r="8"
              stroke="#FFB5A4"
              strokeWidth="2"
            />
            <circle
              className="circle circle-1"
              cx="20"
              cy="70"
              r="14"
              stroke="#FFB5A4"
              strokeWidth="2"
            />
          </g>
        </Tween>
        <path
          d="M61.5058 103.257L46.5541 95.481V109.133L61.5058 103.257Z"
          fill="#007FAB"
        />
        <path
          d="M46.5541 126.298V109.133M46.5541 109.133V95.481L61.5058 103.257L46.5541 109.133Z"
          stroke="#007FAB"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </SVGItem>
    </>
  );
}
