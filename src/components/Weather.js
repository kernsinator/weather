import axios from "axios"
import { useState } from "react"
import { CircularProgress, Box, Button, Paper, Autocomplete, Card, TextField } from '@mui/material'
import config from '../config.json'

const Weather = () => {
    const [weatherData, setWeatherData] = useState({})
    const [city, setCity] = useState('')
    const [weatherHasLoaded, setWeatherHasLoaded] = useState(false)

    const cities = [
        'Minneapolis',
        'Idaho Falls',
        'Wilmington',
        'Melbourne',
    ]

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
            <>
                <Box component='div' sx={{
                    marginTop: '30vh'
                }}>
                    <div>
                        <p>{weatherData.name},{weatherData.sys.state ? weatherData.sys.state : ''} {weatherData.sys.country}</p>
                        <p> Current temp: {weatherData.main.temp}</p>
                        <p> High: {weatherData.main.temp_max}</p>
                        <p> Low: {weatherData.main.temp_min}</p>
                        <p> Feels like: {weatherData.main.feels_like}</p>
                        <p>Looks like: {weatherData.weather[0].description}</p>

                        <form onSubmit={getWeather}>
                            <input value={city} onChange={handleChange} placeholder="City" />
                            <button type="submit">Test</button>
                        </form>
                        {/* <CircularProgress /> */}
                    </div>
                </Box>

                    <Paper sx={{ height: '100%' }} elevation={4}>

                        <Button ovariant="contained" color="primary">
                            Primary Button
                        </Button>
                        <Card variant='outlined'>{city}</Card>
                    </Paper>
            </>

        )
    } else {
        return (
            <>
                <Box component='div' sx={{
                    marginTop: '30vh'
                }}>
                    <form onSubmit={getWeather}>
                        <input value={city} onChange={handleChange} placeholder="City" />
                        <button type="submit">Test</button>
                    </form>
                    <p>nope</p>
                </Box>
            </>
        )
    }
}

export default Weather
