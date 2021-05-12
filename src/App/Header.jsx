import React from 'react'
import { SearchForm } from './SearchForm'

export function Header({handleCitySearch, handleLocate}) {
    return <>
        <h1>Meteo Application</h1>
        <SearchForm 
        handleCitySearch={handleCitySearch}
        handleLocate={handleLocate}
        />
    </>
}