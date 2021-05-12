import React, { useEffect, useState } from 'react'
import { celcius } from '../utils/Converter'
import { Hour } from './Hour'

export function NextHours({ data }) {

    return <section className="card">
        <div className="card-header">
            <h3>Prochaines heures</h3>
        </div>
        <ul className="next-hours">
            {
                data ?
                    data.hourly.map((hour, index) => <Hour key={index} index={index} data={hour} />) : null
            }
        </ul>
    </section>
}