import styles from "./Address.module.scss";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import React from "react";

type MyMapComponentProps = {
  center: google.maps.LatLngLiteral;
  zoom: number;
  children: React.ReactNode;
};
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
      <div ref={ref} id="map" style={{ width: "100%", height: "500px" }} />
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

export const Map = () => {
  const center = { lat: -34.7893193, lng: -56.0795449 };
  const church = { lat: -34.7892886, lng: -56.0781287 };
  const zoom = 15;

  return (
    <Wrapper
      apiKey="AIzaSyBzqr3LF_LGaekgyjh_N-sKxIoplIQMR5E"
      render={RenderStatus}
    >
      <MyMapComponent center={center} zoom={zoom}>
        <Marker position={center} label="Salon" />
        <Marker position={church} label="Iglesia" />
      </MyMapComponent>
    </Wrapper>
  );
};
