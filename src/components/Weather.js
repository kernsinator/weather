import axios from "axios"
import { useState } from "react"

const Weather = () => {
    const [weatherData, setWeatherData] = useState({})
    const [city, setCity] = useState('')
    const [weatherHasLoaded, setWeatherHasLoaded] = useState(false)

    const getWeather = (event) => {
        event.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial
        `)
            .then(res => {
                console.log(res.data);
                setWeatherData(res.data)
                setWeatherHasLoaded(true)
            })
    }

    const handleChange = (e) => {
        setCity(e.target.value);
    };



    if (weatherHasLoaded) {
        return (
            <div className="text-slate-800 flex-col justify-center">
                <p>{weatherData.name},{weatherData.sys.state ? weatherData.sys.state : ''} {weatherData.sys.country}</p>
                <p> Current temp: {weatherData.main.temp}</p>
                <p> High: {weatherData.main.temp_max}</p>
                <p> Low: {weatherData.main.temp_min}</p>
                <p> Feels like: {weatherData.main.feels_like}</p>
                <p>Looks like: {weatherData.weather[0].description}</p>

                <form className="flex-col" onSubmit={getWeather}>
                    <input className="block" value={city} onChange={handleChange} placeholder="City" />
                    <button className="bg-red-200 rounded" type="submit">Test</button>
                </form>
            </div>
        )
    } else {
        return (
            <>
                <form onSubmit={getWeather}>
                    <input value={city} onChange={handleChange} placeholder="City" />
                    <button className="bg-slate-600" type="submit">Test</button>
                </form>
                <p>nope</p>
            </>
        )
    }
}

export default Weather
