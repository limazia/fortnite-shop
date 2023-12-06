import { useEffect, useState } from "react";
import moment from "moment-timezone";

export function useCountdown() {
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    const brtTimezone = "America/Sao_Paulo";
    const targetTime = moment().tz(brtTimezone).hour(21).minute(0).second(0);
    let duration = moment.duration(targetTime.diff(moment().tz(brtTimezone)));

    const intervalId = setInterval(() => {
      duration = moment.duration(duration.asMilliseconds() - 1000);

      const formattedCountdown = moment
        .utc(duration.asMilliseconds())
        .format("HH:mm:ss");

      setCountdown(formattedCountdown);

      if (duration.asSeconds() <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId); // Limpar intervalo no desmontar do componente
  }, []);

  return [countdown];
}
