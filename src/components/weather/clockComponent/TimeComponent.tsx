import { useState, useEffect } from "react";
const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center gap-3 text-[150px] font-bold">
        <div>{time.getHours()}</div>
        <div className="animate-pulse">:</div>
        <div>{time.getMinutes()}</div>
      </div>
    </>
  );
};

export default ClockComponent;
