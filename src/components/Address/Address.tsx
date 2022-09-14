import React from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { MapChurch, MapEvent } from "./Map/Map";
import { GoogleMap, Marker } from "./GoogleMap/GoogleMap";
import styles from "./Address.module.scss";

const RenderStatus = (status: Status): React.ReactElement => {
  if (status === Status.LOADING) return <h3>{status}</h3>;
  if (status === Status.FAILURE) return <h3>{status}</h3>;
  return <></>;
};

export const Address = () => {
  const centerMap = { lat: -34.789583771979274, lng: -56.07750642753578 };
  const centerChurch = { lat: -34.789099160710435, lng: -56.0781287 };
  const centerParty = { lat: -34.7893193, lng: -56.0795449 };

  const markers = [
    {
      id: 1,
      name: "Fiesta",
      position: centerParty,
    },
    {
      id: 2,
      name: "Iglesia",
      position: centerChurch,
    },
  ];

  return (
    <div className={styles.container} id="address">
      {/* <a name="address"></a> */}
      <MapChurch />
      <MapEvent />
      <Wrapper
        apiKey="AIzaSyBzqr3LF_LGaekgyjh_N-sKxIoplIQMR5E"
        render={RenderStatus}
      >
        <GoogleMap center={centerMap} zoom={16}>
          <Marker position={centerChurch} label="Iglesia" />
          <Marker position={centerParty} label="Fiesta" />
        </GoogleMap>
      </Wrapper>
    </div>
  );
};
