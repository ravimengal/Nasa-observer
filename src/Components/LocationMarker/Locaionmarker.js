import React from 'react'
import {Icon} from "@iconify/react"
import {locationIcon} from "@iconify/icons-mdi/fire-alert"
import "./Locationmarker.css"

const Locaionmarker = ({lat, lng, onclick}) => {
    return (
        <div className='location-marker' onclick={onclick}>

            <Icon icon={locationIcon} className='location-icon'/>
            
        </div>
    )
}

export default Locaionmarker
