/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'






function DemanderService() {

    const [userLocation, setUserLocation] = useState({});


    useEffect(() => {
        if (!navigator.geolocation) {
        console.log("Geolocation is not supported by this browser.");
        return;
        }

        navigator.geolocation.getCurrentPosition(
        position => {
            setUserLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        },
        () => {
            console.log("Geolocation request denied.");
        }
        );
    }, []);
    
    console.log(userLocation);
    return (
    <div>    
    <MapContainer center={[33.589886, -7.603869]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Marker position={[33.589886, -7.603869]}>
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
            </Marker>
    </MapContainer>
    </div>
    )
}

let DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png"
})
L.Marker.prototype.options.icon = DefaultIcon

export default DemanderService