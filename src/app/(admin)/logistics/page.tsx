import type { Metadata } from "next";
import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import LogisticsMap from "./LogisticsMap";
import LogisticsStats from "@/components/logistics/LogisticsStats";
import RouteDetailsPanel from "@/components/logistics/RouteDetailsPanel";
import RoutesTable from "@/components/logistics/RoutesTable";

export const metadata: Metadata = {
  title: "Logistics | Transport Lavigne",
  description: "Gestion de la logistique Transport Lavigne",
};

export default function Logistics() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Logistics" />
      
      {/* Statistics Cards */}
      <LogisticsStats />

      {/* Map and Route Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Logistics Map
              </h3>
              <p className="text-sm text-gray-500">
                Visualisez les trajets et les livraisons sur la carte
              </p>
            </div>
            <div className="flex-1">
              <LogisticsMap />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <RouteDetailsPanel />
        </div>
      </div>

      {/* Routes Table */}
      <RoutesTable />
    </div>
  );
}

