import React, { useState } from 'react'
import { oneCallAPI, getGeoData } from '../utils/api'


export function SearchForm({handleCitySearch, handleLocate}) {

    return <form id="form" onSubmit={handleCitySearch}>
        <div className="town">
            <input type="text" name="town" id="town" placeholder="ville" />
        </div>
        <a href="" id="locate"><img src="img/local.png" alt="localization" onClick={handleLocate} /></a>
        <button type="submit" >Rechercher</button>
    </form>
}