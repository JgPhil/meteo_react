import React, { useEffect, useState } from 'react'
import { getGeoData, oneCallAPI } from '../utils/api'
import { DataSection } from './DataSection'
import { Header } from './Header'

export function Main() {

    const [data, setData] = useState(null)
    const [city, setCity] = useState(null)

    async function handleCitySearch(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formDataObj = Object.fromEntries(formData.entries())
        setCity(formDataObj.town)
    }

    async function handleLocate(e) {
        e.preventDefault()
        const data = await getGeoData();
        setCity(data["geoplugin_city"]);
    }

    useEffect( async () => {
        const newData = await oneCallAPI(city)
        setData(newData)
    }, [city])

    return <>
        <Header
            handleCitySearch={handleCitySearch}
            handleLocate={handleLocate}
        />
        <DataSection data={data} city={city} />
    </>
}