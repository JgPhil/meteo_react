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
            <div className="today">Maintenant</div>
            <div id="description"> {description}</div>
            <h2 id="actual-temp"> {currentTemp}</h2>
            <div id="location"> {location}</div>
        </div>
    </div>
}