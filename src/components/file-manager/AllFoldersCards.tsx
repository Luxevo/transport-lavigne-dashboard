"use client";
import React from "react";
import Link from "next/link";
import { MoreDotIcon } from "@/assets/icons";

interface FolderCard {
  name: string;
  files: number;
  size: string;
}

const foldersData: FolderCard[] = [
  {
    name: "Images",
    files: 345,
    size: "26.40 GB",
  },
  {
    name: "Documents",
    files: 130,
    size: "26.40 GB",
  },
  {
    name: "Apps",
    files: 130,
    size: "26.40 GB",
  },
  {
    name: "Downloads",
    files: 345,
    size: "26.40 GB",
  },
];

export default function AllFoldersCards() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 w-full h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">All Folders</h3>
        <Link
          href="#"
          className="text-sm font-medium text-brand-500 hover:text-brand-600"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 flex-1">
        {foldersData.map((folder) => (
          <div
            key={folder.name}
            className="rounded-xl border border-gray-200 bg-white p-5 relative"
          >
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
              <MoreDotIcon className="w-5 h-5" />
            </button>
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <img
                src="/images/logo/folder.png"
                alt="Folder"
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {folder.name}
              </h4>
              <p className="text-sm text-gray-500 mb-1">
                {folder.files} Files
              </p>
              <p className="text-sm font-medium text-gray-700">
                {folder.size}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

