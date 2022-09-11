// import styles from "./Address.module.scss";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import React from "react";
import { Parallax } from "react-scroll-parallax";

type MyMapComponentProps = {
  center: google.maps.LatLngLiteral;
  zoom: number;
  children: React.ReactNode;
};
// dark map example https://jsfiddle.net/gh/get/library/pure/googlemaps/js-samples/tree/master/dist/samples/style-array/jsfiddle
const MyMapComponent = ({ center, zoom, children }: MyMapComponentProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, center, zoom]);

  return (
    <>
      <div
        ref={ref}
        id="map"
        style={{
          width: "100%",
          height: "500px",
          borderTopStyle: "solid",
          borderTopWidth: "2px",
          borderTopColor: "#3a3b3c",
        }}
      />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          const newProps = { map };
          return React.cloneElement(child, newProps);
        }
      })}
    </>
  );
};

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker({ label: options.label }));
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker, options.label]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

// https://stackblitz.com/github/googlemaps/js-samples/tree/sample-react-map?file=index.tsx
const RenderStatus = (status: Status): React.ReactElement => {
  if (status === Status.LOADING) return <h3>{status}</h3>;
  if (status === Status.FAILURE) return <h3>{status}</h3>;
  return <></>;
};

export const MapChurch = () => {
  const center = { lat: -34.7893193, lng: -56.0795449 };

  return (
    <Wrapper
      apiKey="AIzaSyBzqr3LF_LGaekgyjh_N-sKxIoplIQMR5E"
      render={RenderStatus}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <h1>Religioso ⛪️</h1>
        <h2>Iglesia San José de Manga</h2>
        <h2>18:30 puntual</h2>

        <MyMapComponent center={center} zoom={16}>
          <Marker
            position={{ lat: -34.7892886, lng: -56.0781287 }}
            label="Iglesia"
          />
        </MyMapComponent>
      </div>
    </Wrapper>
  );
};

export const MapEvent = () => {
  const center = { lat: -34.7893193, lng: -56.0795449 };

  return (
    <Wrapper
      apiKey="AIzaSyBzqr3LF_LGaekgyjh_N-sKxIoplIQMR5E"
      render={RenderStatus}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <h1>Fiesta 🎉🎊</h1>
        <h2>Regency Park Hotel</h2>
        <h2>Salón Los Olivos</h2>
        <MyMapComponent center={center} zoom={16}>
          <Marker position={center} label="Fiesta" />
        </MyMapComponent>
      </div>
    </Wrapper>
  );
};
