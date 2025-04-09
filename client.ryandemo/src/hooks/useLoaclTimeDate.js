import { useEffect, useState } from "react";

const useLoaclTimeDate = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [localTimeMilliseconds, setLocalTimeMilliseconds] = useState(0);

  useEffect(() => {
    const currentDate = new Date().getTime();
    const date = new Date(currentDate);
    const options = { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone };

    const localTimeString = date.toLocaleString("en-US", options);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    setFormattedDate(formattedDate);

    const localTime = date.toLocaleTimeString("en-US", options);
    setLocalTime(localTime);

    const localTimeMilliseconds = new Date(localTimeString).getTime();
    setLocalTimeMilliseconds(localTimeMilliseconds);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return { formattedDate, localTime, localTimeMilliseconds };
};

export default useLoaclTimeDate;
