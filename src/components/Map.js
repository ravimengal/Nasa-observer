import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

// define constants
const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDIlGwn1DUIHh-K87v7tNY0_mOw6qeNgF8' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
                onClick={()=>setLocationInfo(null)}
                onDrag={()=>setLocationInfo(null)}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 19.0760,
        lng: 72.8777
    },
    zoom: 6
}

export default Map
