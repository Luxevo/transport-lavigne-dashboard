"use client";
import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function StorageDetails() {
  const options: ApexOptions = {
    chart: {
      type: "donut",
      fontFamily: "Outfit, sans-serif",
    },
    colors: ["#c4b5fd", "#fd853a", "#fbbf24", "#6ce9a6"],
    labels: ["Downloads", "Apps", "Documents", "Media"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontFamily: "Outfit, sans-serif",
      fontSize: "14px",
      fontWeight: 500,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "16px",
              fontWeight: 600,
              color: "#101828",
            },
            value: {
              show: true,
              fontSize: "24px",
              fontWeight: 700,
              color: "#101828",
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "16px",
              fontWeight: 600,
              color: "#667085",
              formatter: () => "160 GB",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
    },
  };

  const series = [26.4, 85.3, 5.4, 42.7];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 w-full h-full flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Storage Details
        </h3>
        <p className="text-sm text-gray-500">
          585 GB Free space left
        </p>
      </div>
      <div className="flex justify-center flex-1 items-center">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={350}
        />
      </div>
    </div>
  );
}

