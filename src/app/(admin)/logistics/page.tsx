import type { Metadata } from "next";
import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import LogisticsMap from "./LogisticsMap";

export const metadata: Metadata = {
  title: "Logistics | Transport Lavigne",
  description: "Gestion de la logistique Transport Lavigne",
};

export default function Logistics() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Logistics" />
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Logistics Map
          </h3>
          <p className="text-sm text-gray-500">
            Visualisez les trajets et les livraisons sur la carte
          </p>
        </div>
        <LogisticsMap />
      </div>
    </div>
  );
}

