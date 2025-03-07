import { useState, useEffect } from "react";
import { DiscountTimed } from "../assets/index.js";

const TimedDiscount = () => {
  const [timeLeft, setTimeLeft] = useState({ hour: 0, min: 0, sec: 0 });

  useEffect(() => {
    let targetTime = localStorage.getItem("discountEndTime");

    if (!targetTime) {
      targetTime = new Date().getTime() + 2.5 * 60 * 60 * 1000;
      localStorage.setItem("discountEndTime", targetTime);
    } else {
      targetTime = parseInt(targetTime);
    }

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ hour: 0, min: 0, sec: 0 });
        localStorage.removeItem("discountEndTime");
        return;
      }

      const hour = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const min = Math.floor((difference / (1000 * 60)) % 60);
      const sec = Math.floor((difference / 1000) % 60);

      setTimeLeft({ hour, min, sec });
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-between bg-white">
      <div className="flex w-full items-center justify-center p-4">
        <img loading="lazy" src={DiscountTimed} alt="Discount Timer" />
      </div>

      <div className="w-full">
        <h3 className="text-md text-center font-semibold text-black uppercase">
          Product Name
        </h3>
        <p className="text-red mt-1 text-center text-lg font-semibold">
          $200.00
        </p>
      </div>

      <div className="flex w-full items-center justify-evenly py-4">
        {Object.entries(timeLeft).map(([label, value], index) => (
          <div key={index} className="text-center">
            <div className="border-red mb-1 flex h-12 w-12 items-center justify-center rounded-full border text-lg font-bold text-gray-500">
              {String(value).padStart(2, "0")}
            </div>
            <span className="text-center text-gray-500 capitalize">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimedDiscount;
