import React from 'react'
import { getConditions } from '../utils/api';
import { celcius } from '../utils/Converter';


export function Hour({ data, index }) {
    const currentDate = new Date()
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', "Jeudi", 'Vendredi', 'Samedi'];
    let date = (new Date(currentDate.getTime())).addHours(index);
    console.log(date)
    let today = true;
    let tomorrow = false;

    Date.prototype.addHours = function (hours) {
        this.setHours(this.getHours() + hours);
        return this;
    }

    const conditions = getConditions(data.weather[0].description);


    return <li className={conditions + " day-column"} >
        <h5>{date.getDay()} h</h5>
        <h4>{date.getHours()} h</h4>
        <div className="temp-cards">{celcius(data.temp)}°C</div>
    </li>
}