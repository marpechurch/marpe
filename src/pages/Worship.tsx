import "react";

import church from "../assets/church.webp";

import "./Worship.css";

export default function Worship() {
  return (
    <>
      <img src={church} alt="Worship test" />
      <h1>찬양 플레이리스트</h1>
      <iframe
        src="https://www.youtube.com/embed/videoseries?si=jcbM7u0rPSMCORTw&amp;list=PL6VO8u2Zpfdfs9VLqEHkNvq0ICxdXN3j7"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}
