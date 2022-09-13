import React from "react";
import styles from "./GoogleMap.module.scss";

type GoogleMapProps = {
  center: google.maps.LatLngLiteral;
  zoom: number;
  children: React.ReactNode;
};

// dark map example https://jsfiddle.net/gh/get/library/pure/googlemaps/js-samples/tree/master/dist/samples/style-array/jsfiddle
export const GoogleMap = ({ center, zoom, children }: GoogleMapProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, center, zoom]);

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
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
