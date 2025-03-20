import TimeComponent from "./clockComponent/TimeComponent";
import DayComponent from "./clockComponent/DayComponent";
import SearchBar from "../SearchBar";

const ClockComponent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center font-bold">
        <TimeComponent />
        <DayComponent />
        <SearchBar />
      </div>
    </>
  );
};

export default ClockComponent;
