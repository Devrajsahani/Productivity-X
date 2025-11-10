import { useState } from "react";


console.log("WEATHER JSX LOADED");
    
export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      setError("");
      setWeather(null);

      const apiKey = "44a0d37ab3e63bcd9b59a52f708f4222";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <h2 className="text-3xl font-bold mb-6">Weather Dashboard</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter city name"
          className="flex-1 px-3 py-2 rounded bg-gray-700"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={fetchWeather}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {weather && (
        <div className="bg-gray-700 p-6 rounded shadow">
          <h3 className="text-2xl font-bold">{weather.name}</h3>
          <p className="text-gray-600 mb-4">
            {weather.weather[0].main} — {weather.weather[0].description}
          </p>

          <p className="text-4xl font-bold">{weather.main.temp}°C</p>

          <div className="flex justify-around mt-4">
            <div>
              <p className="font-bold">{weather.main.humidity}%</p>
              <p className="text-gray-500 text-sm">Humidity</p>
            </div>

            <div>
              <p className="font-bold">{weather.wind.speed} m/s</p>
              <p className="text-gray-500 text-sm">Wind</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
