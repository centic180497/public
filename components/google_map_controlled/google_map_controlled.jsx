import React from 'react'
import { GoogleMap } from 'react-google-maps'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap } from 'react-google-maps'

import { MapOptionStyle, TypeConfigMap } from '../../utils/map_constants'

function MapOptions(props) {
    return ( <GoogleMap
                defaultZoom={TypeConfigMap.zoom}
                defaultCenter={TypeConfigMap.location}
                options={{
                    styles: MapOptionStyle,
                }}
            >
                {
                    props.children
                }
            
        </GoogleMap>)
}

const GoogleMapControlled = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDb5xOZiLOJAtKJWj4spvQf3UEQvE-3sc4&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
)

export default GoogleMapControlled(MapOptions)
