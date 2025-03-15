import { useState, useEffect } from "react";
const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  const setMinutes = () => {
    if (time.getMinutes() < 10) {
      return `0${time.getMinutes()}`;
    }
    return time.getMinutes();
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 text-[150px] font-bold">
        <div>{time.getHours()}</div>
        <div className="animate-pulse">:</div>
        <div>{setMinutes()}</div>
      </div>
    </>
  );
};

export default ClockComponent;
