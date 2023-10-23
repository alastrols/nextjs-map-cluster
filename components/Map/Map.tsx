import style from "@/styles/Home.module.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerIcon from "@/node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "@/node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import React, { useEffect } from "react";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import MarkerClusterGroup from "./MakeClusterGroup";

interface Label {
  position: any;
  name: string;
}
const Maps = () => {
  const [center, setCenter] = React.useState<any>([33.005033, -97.226713]);
  const location = [
    {
      position: [33.005033, -97.226713],
      name: "Alliance DFW Boating <br /> Center, Inc.",
      lat: 33.005033,
      long: -97.226713,
    },
    {
      position: [33.069471, -97.017023],
      name: "La Vida Starships",
      lat: 33.069471,
      long: -97.017023,
    },
  ];

  return (
    <MapContainer
      style={{
        height: "100vh",
        width: "100vw",
      }}
      center={center}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://www.google.com/maps/vt?lyrs=m@189&x={x}&y={y}&z={z}" />

      <MarkerClusterGroup>
        {location.map((value: Label, key) => {
          return (
            <Marker
              key={key}
              icon={
                new L.Icon({
                  iconUrl: MarkerIcon.src,
                  iconRetinaUrl: MarkerIcon.src,
                  iconSize: [25, 41],
                  iconAnchor: [12.5, 41],
                  popupAnchor: [0, -41],
                  shadowUrl: MarkerShadow.src,
                  shadowSize: [41, 41],
                })
              }
              position={value.position}
            >
              <Popup>
                <p dangerouslySetInnerHTML={{ __html: value.name }}></p>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Maps;
