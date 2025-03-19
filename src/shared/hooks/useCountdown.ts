import { useState, useEffect } from "react";
import { differenceInSeconds, addDays, set } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export function useCountdown(targetHour = 21, targetMinute = 0) {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const timeZone = "America/Sao_Paulo";
      const now = toZonedTime(new Date(), timeZone);

      let target = set(now, {
        hours: targetHour,
        minutes: targetMinute,
        seconds: 0,
        milliseconds: 0,
      });

      if (now > target) {
        target = set(addDays(now, 1), {
          hours: targetHour,
          minutes: targetMinute,
          seconds: 0,
          milliseconds: 0,
        });
      }

      const diff = differenceInSeconds(target, now);

      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    setCountdown(calculateTimeRemaining());

    const intervalId = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetHour, targetMinute]);

  return countdown;
}
