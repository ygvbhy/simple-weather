import TimeComponent from "./clockComponent/TimeComponent";
import DayComponent from "./clockComponent/DayComponent";
const ClockComponent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center font-bold">
        <TimeComponent />
        <DayComponent />
      </div>
    </>
  );
};

export default ClockComponent;
