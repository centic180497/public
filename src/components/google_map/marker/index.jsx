import React from 'react'

import { Marker, InfoWindow } from 'react-google-maps'
import parkingFree from 'assets/images/parking/parkingfree.png'
import icParking from 'assets/images/parking/ic_parking.png'
import CustomInfoWindow from 'components/admin_console/parking_public/google_map/custom_info_window/custom_infowindow'

function CustomMarker(props) {
    const { data, markerActive, handleMarkerClick, onChangeMapClick } = props
    const { idInfoWindow } = markerActive
    const { lat, lng, id, type } = data

    const iconMarker = {
        url: icParking,
        scaledSize: new window.google.maps.Size(40, 40),
    }

    const iconFree = {
        url: parkingFree,
        scaledSize: new window.google.maps.Size(40, 40),
    }

    const handleClick = (e, data) => {
        handleMarkerClick(e, data)
    }

    return (
        <Marker
            position={{ lat: lat, lng: lng }}
            key={id}
            icon={type === 1 ? iconFree : iconMarker}
            onClick={(e) => handleClick(e, data)}
            onMouseOver={(e) => handleClick(e, data)}
            onMouseOut={onChangeMapClick}
        >
            {id === idInfoWindow && (
                <InfoWindow onCloseClick={onChangeMapClick}>
                    <CustomInfoWindow info={data} />
                </InfoWindow>
            )}
        </Marker>
    )
}
export default CustomMarker
