import React from 'react'
import { CurrentWeather } from './CurrentWeather'
import { openWeatherMapIcon, getConditions } from '../utils/api'
import { NextHours } from './NextHours'

export function DataSection({ data, city }) {



    return <>
        <div className="display-section">
            <CurrentWeather
                data={data}
                city={city}
                openWeatherMapIcon={openWeatherMapIcon}
                getConditions={getConditions}
            />
            <NextHours data={data}/>

            <section className="card">
                <div className="card-header">
                    <h3>Prévisions quotidiennes</h3>
                </div>
                <ul className="next-days"></ul>
            </section>
            <section className="card">
                <div className="card-header">
                    <h3>Prochaines heures</h3>
                </div>
                <ul className="next-hours"></ul>
            </section>
        </div>
    </>
}