import { useEffect, useState } from "react";
import { getDustInfo } from "../../api/DustAPI";
import { DustInfo } from "../../types";

const DustComponent = () => {
  const [dustInfo, setDustInfo] = useState<{ data: DustInfo; status: number }>();

  const fetchDustInfo = async () => {
    const dustInfoData: { data: DustInfo; status: number } = await getDustInfo();
    if (dustInfoData) setDustInfo(dustInfoData);
  };

  useEffect(() => {
    fetchDustInfo();
  }, []);

  const setDustNum = () => {
    if (dustInfo) {
      const dust = dustInfo.data.aqi;
      if (dust > 0 && dust <= 50) return "😊 좋음";
      else if (dust > 50 && dust <= 100) return "🙂 보통";
      else if (dust > 100 && dust <= 150) return "😕 나쁨";
      else if (dust > 150 && dust <= 200) return "😫 매우 나쁨";
      else if (dust > 200) return "🤢 중도미세먼지";
    } else return "";
  };

  return (
    <div>
      {dustInfo ? (
        <div className="text-4xl">{setDustNum()}</div>
      ) : (
        <div className="text-4xl">Loading...</div>
      )}
    </div>
  );
};

export default DustComponent;
