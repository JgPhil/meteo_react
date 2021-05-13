import React from 'react'
import { getConditions } from '../utils/api';
import { celcius } from '../utils/Converter';


export function ThumbnailCardDay({ data }) {

    let date = new Date(data.dt * 1000)
    console.log(date)

    const conditions = getConditions(data.weather[0].description);


    return <li className={conditions + " day-column"} >
        <h5 className="date">{date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })}</h5>
        <h4>{data.weather[0].description}</h4>
        <div className="temp-cards">{celcius(data.temp.min)} / {celcius(data.temp.max)}°C</div>
    </li>
}