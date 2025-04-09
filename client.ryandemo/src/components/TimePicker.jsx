import React, { useState } from "react";

const TimePicker = ({ onTimeChange }) => {
  const [time, setTime] = useState({
    hours: "12",
    minutes: "00",
    period: "AM",
  });

  const hoursOptions = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const minutesOptions = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newTime = { ...time, [name]: value };
    setTime(newTime);

    // Combine and send the time to parent
    onTimeChange(`${newTime.hours}:${newTime.minutes} ${newTime.period}`);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "0px",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      {/* Hours Dropdown */}
      <select
        name="hours"
        value={time.hours}
        onChange={handleChange}
        style={{ padding: "5px 10px", fontSize: "16px", borderRadius: "4px 0px 0px 4px", background: "#fff", color: "#2c292b" }}
      >
        {hoursOptions.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>

      {/* Minutes Dropdown */}
      <select
        name="minutes"
        value={time.minutes}
        onChange={handleChange}
        style={{ padding: "5px 10px", fontSize: "16px", background: "#fff", color: "#2c292b" }}
      >
        {minutesOptions.map((minute) => (
          <option key={minute} value={minute}>
            {minute}
          </option>
        ))}
      </select>

      {/* AM/PM Dropdown */}
      <select
        name="period"
        value={time.period}
        onChange={handleChange}
        style={{ padding: "5px 10px", fontSize: "16px", borderRadius: "0px 4px 4px 0px", background: "#fff", color: "#2c292b" }}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

export default TimePicker;
