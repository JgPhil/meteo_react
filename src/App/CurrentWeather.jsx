import React, { useEffect, useState } from 'react'
import { celcius } from '../utils/Converter'

export function CurrentWeather({ data, city, getConditions, openWeatherMapIcon }) {

    const [icon, setIcon] = useState(null)
    const [description, setDescription] = useState(' - - ')
    const [currentTemp, setCurrentTemp] = useState(' - - ')
    const [location, setLocation] = useState(' - - ')
    const [conditionsClassName, setconditionsClassName] = useState(null)

    useEffect(() => {
        setDescription(data ? data.current.weather[0].description : description)
        setCurrentTemp(data ? celcius(data.current.temp) : currentTemp)
        setLocation(city ?? location)
        setIcon(data ?
            openWeatherMapIcon(data.current.weather[0]["icon"])
            : icon
        )
        setconditionsClassName(data ?
            'card ' + getConditions(data.current.weather[0].description)
            : conditionsClassName
        )
    }, [data])

    return <div className="actual-weather">
        <div id="actual-weather" className={conditionsClassName}>
            <img src={icon} alt="" />
            <div className="today">Aujourd'hui</div>
            <div id="description"><span style={{ color: "black" }} > {description} </span></div>
            <h2 id="actual-temp"><span style={{ color: "black" }} > {currentTemp} </span></h2>
            <div id="location"><span style={{ color: "black" }} > {location} </span></div>
        </div>
    </div>
}