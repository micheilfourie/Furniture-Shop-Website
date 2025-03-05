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
        <div className="w-full h-full bg-white flex flex-col justify-between items-center">

            <div className="w-full flex justify-center items-center p-4">
                <img src={DiscountTimed} alt="Discount Timer" />
            </div>

            <div className="w-full">
                <h3 className="text-md text-black font-semibold text-center uppercase">Product Name</h3>
                <p className="text-lg text-red font-semibold text-center mt-1">$200.00</p>
            </div>

            <div className="w-full flex justify-evenly items-center py-4">
                {Object.entries(timeLeft).map(([label, value], index) => (
                    <div key={index} className="text-center">
                        <div className="border border-red text-gray-500 rounded-full w-12 h-12 flex justify-center items-center text-lg font-bold mb-1">
                            {String(value).padStart(2, "0")}
                        </div>
                        <span className="text-gray-500 capitalize text-center">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimedDiscount;

