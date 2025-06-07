// SightingsMap.js
import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const SightingsMap = () => {
  const sightings = useSelector(state => state.sightings);

  return (
    <div className="row justify-content-center my-5">
      <div className="col-md-10">
        <h5>Sightings Map</h5>
        <MapContainer center={[37.8, -84.5]} zoom={7} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {sightings.map((s, i) => (
            <Marker key={i} position={[37.8 + i * 0.01, -84.5 + i * 0.01]}>
              <Popup>
                <strong>{s.species}</strong><br />
                {s.location}<br />
                {new Date(s.time).toLocaleString()}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default SightingsMap;