"use client";
import React from "react";
import { BoxIcon, CheckCircleIcon, AlertIcon, TimeIcon } from "@/assets/icons";

interface StatCard {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  change?: string;
  changeType?: "positive" | "negative";
}

const stats: StatCard[] = [
  {
    title: "Trajets actifs",
    value: "12",
    icon: <BoxIcon />,
    color: "text-blue-700",
    bgColor: "bg-blue-100",
    change: "+3 ce mois",
    changeType: "positive",
  },
  {
    title: "Livraisons complétées",
    value: "247",
    icon: <CheckCircleIcon />,
    color: "text-green-700",
    bgColor: "bg-green-100",
    change: "+12%",
    changeType: "positive",
  },
  {
    title: "En attente",
    value: "8",
    icon: <TimeIcon />,
    color: "text-amber-700",
    bgColor: "bg-amber-100",
    change: "-2",
    changeType: "negative",
  },
  {
    title: "Problèmes",
    value: "2",
    icon: <AlertIcon />,
    color: "text-red-700",
    bgColor: "bg-red-100",
    change: "Urgent",
  },
];

export default function LogisticsStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl border border-gray-200 bg-white p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-xl ${stat.bgColor}`}
            >
              <div className={stat.color}>{stat.icon}</div>
            </div>
            {stat.change && (
              <span
                className={`text-xs font-medium ${
                  stat.changeType === "positive"
                    ? "text-green-600"
                    : stat.changeType === "negative"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {stat.change}
              </span>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
            <h4 className="text-2xl font-bold text-gray-800">{stat.value}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

