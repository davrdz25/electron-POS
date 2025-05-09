import { useState, useEffect } from "react";

const UseTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("es-MX", { hour12: true }));
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return time;
};

export default UseTime;