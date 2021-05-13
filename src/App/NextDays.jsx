import React, { useEffect, useState } from 'react'
import { celcius } from '../utils/Converter'
import { ThumbnailCardDay } from './ThumbnailCardDay'

export function NextDays({ data }) {

    return <section className="card">
        <div className="card-header">
            <h3>Jours suivants</h3>
        </div>
        <ul className="next-days">
            {
                data ?
                    data.daily.map((day, index) => <ThumbnailCardDay key={index} data={day} />) : null
            }
        </ul>
    </section>
}