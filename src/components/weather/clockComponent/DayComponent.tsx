import { useEffect } from "react";

let day = new Date();

const DayComponent = () => {
  const setDay = () => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return days[day.getDay()];
  };

  const setDate = () => {
    if (day.getDate() < 10) {
      return `0${day.getDate()}`;
    }
    return day.getDate();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      day = new Date();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="text-right w-full text-2xl">
        {day.getFullYear()}년 {day.getMonth() + 1}월 {setDate()}일 {setDay()}요일
      </div>
    </>
  );
};

export default DayComponent;
