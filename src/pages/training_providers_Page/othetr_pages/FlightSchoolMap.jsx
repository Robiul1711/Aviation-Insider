import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import Title from "@/components/common/Title";
import CommonAds from "@/components/common/CommonAds";
import OtherCommonLinks from "@/components/common/OtherCommonLinks";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

// ✅ Custom red marker icon
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const FlightSchoolMap = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch banner
  const { data: flightSchoolsmapBanner } = useQuery({
    queryKey: ["flightSchoolsmapBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/cms/flight_school_map_page/banner_section"
      );
      return res.data;
    },
  });

  // Fetch flight schools
  const { data: flightSchoolsmap } = useQuery({
    queryKey: ["flightSchoolsMaps"],
    queryFn: async () => {
      const res = await axiosPublic.get("/flight-school-maps");
      return res.data;
    },
  });

  // Convert API data to [lat, lng] numbers
  const schoolPositions =
    flightSchoolsmap?.data?.map((school) => [
      parseFloat(school.latitude),
      parseFloat(school.longitude),
    ]) || [];

  // Center map to first school or fallback to Dhaka
  const center = schoolPositions.length
    ? schoolPositions[0]
    : [23.8103, 90.4125];

  return (
    <div>
      {/* Banner */}
      <CommonBanner
        image={flightSchoolsmapBanner?.data?.banner_section?.image}
        title={flightSchoolsmapBanner?.data?.banner_section?.title}
      />

      <div className="section-padding-x md:pb-10">
        <Title level="title20" className="text-black py-10">
          <span
            dangerouslySetInnerHTML={{
              __html:
                flightSchoolsmapBanner?.data?.banner_section?.description || "",
            }}
          />
        </Title>

        {/* Map container */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-md md:mt-10 z-0">
          <MapContainer
            center={center}
            zoom={5}
            scrollWheelZoom={true}
            className="w-full h-full z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Render markers */}
            {flightSchoolsmap?.data?.map((school) => (
              <Marker
                key={school.id}
                position={[
                  parseFloat(school.latitude),
                  parseFloat(school.longitude),
                ]}
                icon={redIcon}
              >
                <Popup>
                  <strong>{school.school_name}</strong>
                  <br />
                  Location: {parseFloat(school.latitude).toFixed(4)},{" "}
                  {parseFloat(school.longitude).toFixed(4)}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Footer sections */}
      <OtherCommonLinks className="flex flex-wrap justify-center items-center gap-5 section-padding-x py-14" />
      <CommonAds />
    </div>
  );
};

export default FlightSchoolMap;
