import type { Metadata } from "next";
import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import AllMediaCards from "@/components/file-manager/AllMediaCards";
import AllFoldersCards from "@/components/file-manager/AllFoldersCards";
import StorageDetails from "@/components/file-manager/StorageDetails";
import RecentFilesTable from "@/components/file-manager/RecentFilesTable";
import Button from "@/components/ui/button/Button";
import { PlusIcon } from "@/assets/icons";

export const metadata: Metadata = {
  title: "File Manager | Transport Lavigne",
  description: "Gestionnaire de fichiers Transport Lavigne",
};

export default function FileManager() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <PageBreadcrumb pageTitle="File Manager" />
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 sm:max-w-xs">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="fill-gray-500"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                  fill=""
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-11 rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10"
            />
          </div>
          {/* Upload Button */}
          <Button startIcon={<PlusIcon />}>
            Upload File
          </Button>
        </div>
      </div>

      {/* All Media Section */}
      <AllMediaCards />

      {/* All Folders and Storage Details */}
      <div className="grid grid-cols-12 gap-6 items-stretch">
        <div className="col-span-12 xl:col-span-7 flex">
          <AllFoldersCards />
        </div>
        <div className="col-span-12 xl:col-span-5 flex">
          <StorageDetails />
        </div>
      </div>

      {/* Recent Files Section */}
      <RecentFilesTable />
    </div>
  );
}

