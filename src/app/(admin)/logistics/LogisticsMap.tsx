"use client";
import React from "react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
  MapRoute,
} from "@/components/ui/map";

const route = [
  [-73.5567, 45.5088], // Vieux-Montréal
  [-73.5636, 45.5068], // Quartier des spectacles
  [-73.5617, 45.5087], // Place des Arts
  [-73.5852, 45.5049], // Parc du Mont-Royal
] as [number, number][];

const stops = [
  { name: "Vieux-Montréal", lng: -73.5567, lat: 45.5088 },
  { name: "Quartier des spectacles", lng: -73.5636, lat: 45.5068 },
  { name: "Place des Arts", lng: -73.5617, lat: 45.5087 },
  { name: "Parc du Mont-Royal", lng: -73.5852, lat: 45.5049 },
];

export default function LogisticsMap() {
  return (
    <div className="h-full min-h-[500px] w-full rounded-lg overflow-hidden">
      <Map center={[-73.5673, 45.5017]} zoom={12}>
        <MapRoute coordinates={route} color="#57162a" width={4} opacity={0.8} />

        {stops.map((stop, index) => (
          <MapMarker key={stop.name} longitude={stop.lng} latitude={stop.lat}>
            <MarkerContent>
              <div className="size-4.5 rounded-full bg-brand-500 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-semibold">
                {index + 1}
              </div>
            </MarkerContent>
            <MarkerTooltip>{stop.name}</MarkerTooltip>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}

