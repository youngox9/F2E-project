import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clsx } from "clsx";

export default function Navbar(props) {
  const {} = props;

  const [isOpen, setIsOpen] = useState(false);
  const globalProgress = useSelector((state) => state?.global?.progress);

  return (
    <>
      <div className={clsx("navbar", isOpen && "active")}>
        <div className="nav-blur" onClick={() => setIsOpen(false)}></div>
        <div className="nav">
          <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
            <div className="hover-pic">
              {isOpen ? (
                <>
                  <img src="btn/btn_burger_close.png" />
                  <img className="h" src="btn/btn_burger_close_h.png" />
                </>
              ) : (
                <>
                  <img src="btn/btn_burger_open.png" />
                  <img className="h" src="btn/btn_burger_open_h.png" />
                </>
              )}
            </div>
          </div>
          <div className="nav-menu">
            <a href="https://2022.thef2e.com/" target="_blank" rel="noreferrer">
              <div className="hover-pic">
                <img src="/ic/ic_menu_info.png" />
                <img className="h" src="/ic/ic_menu_info_h.png" />
              </div>
              <p>關卡資訊</p>
            </a>
            <a href="https://2022.thef2e.com/" target="_blank" rel="noreferrer">
              <div className="hover-pic">
                <img src="/ic/ic_menu_job.png" />
                <img className="h" src="/ic/ic_menu_job_h.png" />
              </div>
              <p>作品列表</p>
            </a>
            <a href="https://2022.thef2e.com/" target="_blank" rel="noreferrer">
              <div className="hover-pic">
                <img src="/ic/ic_menu_list.png" />
                <img className="h" src="/ic/ic_menu_list_h.png" />
              </div>
              <p>攻略資源</p>
            </a>
            <a href="https://2022.thef2e.com/" target="_blank" rel="noreferrer">
              <div className="hover-pic">
                <img src="/ic/ic_menu_strategy.png" />
                <img className="h" src="/ic/ic_menu_strategy_h.png" />
              </div>
              <p>求職專區</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
