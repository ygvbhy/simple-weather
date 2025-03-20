import { useDust } from "../../hooks/useWeather";

const DustComponent = () => {
  const dustInfo = useDust();

  const setDustNum = () => {
    if (dustInfo) {
      const dust = dustInfo.data.aqi;
      if (dust > 0 && dust <= 50) return "😊 Good";
      else if (dust > 50 && dust <= 100) return "🙂 Normal";
      else if (dust > 100 && dust <= 150) return "😕 Bad";
      else if (dust > 150 && dust <= 200) return "😫 Very Bad";
      else if (dust > 200) return "🤢 Very Very Bad";
    } else return "";
  };

  return (
    <div>
      {dustInfo ? (
        <>
          <div className="text-4xl">{setDustNum()}</div>
          <div className="text-center text-2xl mt-2">{dustInfo.data.aqi}</div>
        </>
      ) : (
        <div className="text-4xl">Loading...</div>
      )}
    </div>
  );
};

export default DustComponent;
