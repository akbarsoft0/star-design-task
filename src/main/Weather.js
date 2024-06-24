import React from "react";
import { useEffect, useState } from "react";
import MyCard from "./MyCard";
import { toast } from "react-toastify";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const getData = async () => {
    const API_KEY = "0ff9f22f9e35600b91b9993206f31f69";
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();
      if (!data) {
        toast.error(data.message);
      }
      toast.success(`${data.name}'s weather is ${data.weather.main}. `);
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="weather">
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        placeholder="ENTER CITY NAME"
      />
      <button onClick={getData}>get data</button>
      {data && <MyCard data={data} />}
    </div>
  );
}

export default Weather;
