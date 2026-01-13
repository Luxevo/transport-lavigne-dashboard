"use client";
import React from "react";
import { CheckCircleIcon, TimeIcon, ArrowRightIcon } from "@/assets/icons";

interface Stop {
  name: string;
  address?: string;
  status: "completed" | "pending" | "current";
  time?: string;
}

interface RouteDetails {
  routeName: string;
  distance: string;
  estimatedTime: string;
  status: "active" | "completed" | "planned";
  stops: Stop[];
}

const routeDetails: RouteDetails = {
  routeName: "Trajet NYC - Manhattan",
  distance: "18.5 km",
  estimatedTime: "45 min",
  status: "active",
  stops: [
    {
      name: "City Hall",
      address: "260 Broadway, New York",
      status: "completed",
      time: "09:00",
    },
    {
      name: "Empire State Building",
      address: "350 5th Ave, New York",
      status: "completed",
      time: "09:25",
    },
    {
      name: "Grand Central Terminal",
      address: "89 E 42nd St, New York",
      status: "current",
      time: "09:40",
    },
    {
      name: "Central Park",
      address: "Central Park, New York",
      status: "pending",
      time: "10:15",
    },
  ],
};

const statusColors = {
  completed: "text-green-600 bg-green-100",
  current: "text-blue-600 bg-blue-100",
  pending: "text-gray-600 bg-gray-100",
};

const statusLabels = {
  completed: "Complété",
  current: "En cours",
  pending: "À venir",
};

export default function RouteDetailsPanel() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 h-full flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Détails du trajet
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Distance</span>
            <span className="text-sm font-medium text-gray-800">
              {routeDetails.distance}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Temps estimé</span>
            <span className="text-sm font-medium text-gray-800">
              {routeDetails.estimatedTime}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Statut</span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
              {routeDetails.status === "active" ? "Actif" : "Planifié"}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-md font-semibold text-gray-800 mb-4">
          Arrêts ({routeDetails.stops.length})
        </h4>
        <div className="space-y-4">
          {routeDetails.stops.map((stop, index) => (
            <div key={stop.name} className="relative">
              {index < routeDetails.stops.length - 1 && (
                <div className="absolute left-5 top-10 w-0.5 h-full bg-gray-200" />
              )}
              <div className="flex items-start gap-3">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    statusColors[stop.status]
                  } relative z-10 flex-shrink-0`}
                >
                  {stop.status === "completed" ? (
                    <CheckCircleIcon className="w-5 h-5" />
                  ) : stop.status === "current" ? (
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                  ) : (
                    <TimeIcon className="w-5 h-5" />
                  )}
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="text-sm font-semibold text-gray-800">
                      {stop.name}
                    </h5>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        statusColors[stop.status]
                      }`}
                    >
                      {statusLabels[stop.status]}
                    </span>
                  </div>
                  {stop.address && (
                    <p className="text-xs text-gray-500 mb-1">{stop.address}</p>
                  )}
                  {stop.time && (
                    <p className="text-xs text-gray-600 font-medium">
                      {stop.time}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

