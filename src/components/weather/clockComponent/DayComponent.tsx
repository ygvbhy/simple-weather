const DayComponent = () => {
  const day = new Date();

  const setDay = () => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return days[day.getDay()];
  };

  return (
    <>
      <div className="text-right w-full text-2xl">
        {day.getFullYear()}년 {day.getMonth() + 1}월 {day.getDate()}일 {setDay()}요일
      </div>
    </>
  );
};

export default DayComponent;
