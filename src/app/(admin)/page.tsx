import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard | Transport Lavigne",
  description: "Tableau de bord Transport Lavigne",
};

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Bienvenue sur le Dashboard
          </h1>
          <p className="text-gray-600">
            Votre tableau de bord est prêt à être configuré.
          </p>
        </div>
      </div>
    </div>
  );
}

