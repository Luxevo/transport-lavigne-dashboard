"use client";
import React from "react";
import Link from "next/link";
import { FolderIcon, VideoIcon, AudioIcon, GridIcon, FileIcon, DownloadIcon } from "@/assets/icons";

interface MediaCard {
  name: string;
  icon: React.ReactNode;
  color: string;
  percentage: number;
  files: number;
  size: string;
}

const mediaData: MediaCard[] = [
  {
    name: "Image",
    icon: <FolderIcon />,
    color: "bg-success-100 text-success-700",
    percentage: 17,
    files: 245,
    size: "26.40 GB",
  },
  {
    name: "Videos",
    icon: <VideoIcon />,
    color: "bg-pink-100 text-pink-700",
    percentage: 22,
    files: 245,
    size: "26.40 GB",
  },
  {
    name: "Audios",
    icon: <AudioIcon />,
    color: "bg-blue-light-100 text-blue-light-700",
    percentage: 23,
    files: 830,
    size: "18.90 GB",
  },
  {
    name: "Apps",
    icon: <GridIcon />,
    color: "bg-orange-100 text-orange-700",
    percentage: 65,
    files: 1200,
    size: "85.30 GB",
  },
  {
    name: "Documents",
    icon: <FileIcon />,
    color: "bg-amber-100 text-amber-700",
    percentage: 10,
    files: 78,
    size: "5.40 GB",
  },
  {
    name: "Downloads",
    icon: <DownloadIcon />,
    color: "bg-purple-100 text-purple-700",
    percentage: 16,
    files: 245,
    size: "26.40 GB",
  },
];

export default function AllMediaCards() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">All Media</h3>
        <Link
          href="#"
          className="text-sm font-medium text-brand-500 hover:text-brand-600"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mediaData.map((media) => (
          <div
            key={media.name}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${media.color}`}>
                {media.icon}
              </div>
              <span className="text-sm font-medium text-gray-500">
                {media.percentage}% Used
              </span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {media.name}
              </h4>
              <p className="text-sm text-gray-500 mb-2">
                {media.files} files
              </p>
              <p className="text-sm font-medium text-gray-700">
                {media.size}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

