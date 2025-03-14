import ClockComponent from "./ClockComponent";
import WeatherComponent from "./WeatherComponent";
import DustComponent from "./DustComponent";

const index = () => {
  return (
    <div className="relative flex flex-col items-center justify-around h-full text-white">
      <WeatherComponent />
      <ClockComponent />
      <DustComponent />
    </div>
  );
};

export default index;
