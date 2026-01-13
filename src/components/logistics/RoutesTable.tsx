"use client";
import React from "react";
import { ArrowRightIcon, CheckCircleIcon, TimeIcon } from "@/assets/icons";

interface Route {
  id: string;
  name: string;
  client: string;
  stops: number;
  distance: string;
  status: "active" | "completed" | "planned";
  progress: number;
}

const routes: Route[] = [
  {
    id: "1",
    name: "Montréal - Centre-ville",
    client: "Client ABC",
    stops: 4,
    distance: "8.5 km",
    status: "active",
    progress: 75,
  },
  {
    id: "2",
    name: "Laval - Longueuil",
    client: "Client XYZ",
    stops: 6,
    distance: "42.3 km",
    status: "active",
    progress: 45,
  },
  {
    id: "3",
    name: "Québec - Lévis",
    client: "Client DEF",
    stops: 3,
    distance: "12.8 km",
    status: "planned",
    progress: 0,
  },
  {
    id: "4",
    name: "Trois-Rivières - Shawinigan",
    client: "Client GHI",
    stops: 5,
    distance: "28.6 km",
    status: "completed",
    progress: 100,
  },
];

const statusConfig = {
  active: {
    label: "Actif",
    color: "bg-blue-100 text-blue-700",
    icon: <ArrowRightIcon className="w-4 h-4" />,
  },
  completed: {
    label: "Complété",
    color: "bg-green-100 text-green-700",
    icon: <CheckCircleIcon className="w-4 h-4" />,
  },
  planned: {
    label: "Planifié",
    color: "bg-gray-100 text-gray-700",
    icon: <TimeIcon className="w-4 h-4" />,
  },
};

export default function RoutesTable() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Trajets récents
          </h3>
          <p className="text-sm text-gray-500">
            Liste de tous les trajets actifs et planifiés
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Trajet
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Client
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Arrêts
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Distance
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Progression
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                Statut
              </th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => {
              const status = statusConfig[route.status];
              return (
                <tr
                  key={route.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-gray-800">
                      {route.name}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">{route.client}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">{route.stops}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">
                      {route.distance}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <div
                          className="bg-brand-500 h-2 rounded-full transition-all"
                          style={{ width: `${route.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">
                        {route.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${status.color}`}
                    >
                      {status.icon}
                      {status.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

