import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  GeoJSON,
  Tooltip,
} from "react-leaflet";

export default function Maps(props) {
  const { data, geoJson, handleClick, high, low } = props;

  const countryStyle = {
    fillOpacity: 0.4,
    color: "black",
    weight: 2,
  };

  const onEachProvince = (province, layer) => {
    const totalBudaya = parseInt(data[province.index]?.totalBudaya) + 2;

    if (!isNaN(totalBudaya)) {
      if (totalBudaya > high) {
        layer.options.fillColor = "#73D737"; //hijau
      } else if (totalBudaya < low) {
        layer.options.fillColor = "#FB4141"; //merah
      } else {
        layer.options.fillColor = "#E1FB41"; //kuning
      }
    }

    layer.on("click", function () {
      handleClick(
        data[province.index]?.provinsiId,
        data[province.index]?.provinsi?.namaProvinsi
      );
    });

    layer.on("mouseover", function (e) {
      const target = e.target;
      target.setStyle({
        color: "white",
        fillOpacity: 0.8,
        weight: 2,
      });
    });

    layer.on("mouseout", function (e) {
      const target = e.target;
      target.setStyle({
        fillOpacity: 0.4,
        color: "black",
        weight: 2,
      });
    });
  };

  return (
    <div>
      <MapContainer
        className="fixed"
        center={[-0.789275, 113.921326]}
        zoom={6}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data &&
          data.map((i, idx) => (
            <Marker
              key={idx}
              position={[
                i.provinsi?.latitude || "",
                i.provinsi?.longitude || "",
              ]}
              eventHandlers={{
                click: () => {
                  handleClick(i.provinsiId, i.provinsi?.namaProvinsi);
                },
              }}
            >
              <Tooltip>
                <b>{i.provinsi?.namaProvinsi}</b>
                <p>{parseInt(i.totalBudaya) + 2} Budaya</p>
              </Tooltip>
            </Marker>
          ))}
        {data.length > 0 && high && low && (
          <GeoJSON
            style={countryStyle}
            data={geoJson}
            onEachFeature={onEachProvince}
          />
        )}
      </MapContainer>
    </div>
  );
}
