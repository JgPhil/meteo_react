import React from 'react'
import { CurrentWeather } from './CurrentWeather'
import { openWeatherMapIcon, getConditions } from '../utils/api'
import { NextHours } from './NextHours'
import { NextDays } from './NextDays'

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

            <NextDays data={data} />
        </div>
    </>
}