import { useState, useEffect } from "react";

const UseDate = () => {
  const formatDate = (date: Date) => {
    const monthShort = date.toLocaleString("es-MX", { month: "short" }); // "Mar"
    const day = date.getDate().toString().padStart(2, "0"); // "25"
    const monthNumber = (date.getMonth() + 1).toString().padStart(2, "0"); // "03"
    const year = date.getFullYear(); // "2025"

    return `${monthShort} ${day}-${monthNumber}-${year}`;
  };

  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(formatDate(new Date())); // Actualiza la fecha cada día
    }, 1000 * 60 * 60 * 24); // Se ejecuta una vez al día

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return date;
};

export default UseDate;