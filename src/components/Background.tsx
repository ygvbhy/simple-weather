import { useState, useEffect } from "react";

const Background = () => {
  const [backgroundUrl, setBackgroundUrl] = useState("/images/flower.jpg");

  // 날씨 정보를 여기서 받아오거나 상태관리로 받아와야 할거 같은데
  // 굳이 배경 정하자고 API 를 또 불러올 이유가 없을거 같음
  // 기본 이미지 하나 정하기

  useEffect(() => {});
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <img src={backgroundUrl} alt="background" className="w-full h-full object-cover" />
    </div>
  );
};

export default Background;
