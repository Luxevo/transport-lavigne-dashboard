"use client";
import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { EyeIcon, TrashBinIcon } from "@/assets/icons";

interface FileItem {
  id: number;
  fileName: string;
  category: string;
  size: string;
  dateModified: string;
}

const filesData: FileItem[] = [
  {
    id: 1,
    fileName: "Video_947954.mp4",
    category: "Video",
    size: "89 MB",
    dateModified: "12 Jan, 2027",
  },
  {
    id: 2,
    fileName: "Travel.jpg",
    category: "Image",
    size: "5.4 MB",
    dateModified: "10 Feb, 2027",
  },
  {
    id: 3,
    fileName: "Document.pdf",
    category: "Document",
    size: "1.2 MB",
    dateModified: "8 Mar, 2027",
  },
  {
    id: 4,
    fileName: "Video_947954_028.mp4",
    category: "Video",
    size: "489 MB",
    dateModified: "29 Apr, 2027",
  },
  {
    id: 5,
    fileName: "Mountain.png",
    category: "Image",
    size: "5.4 MB",
    dateModified: "10 Feb, 2027",
  },
  {
    id: 6,
    fileName: "CV.pdf",
    category: "Document",
    size: "12 MB",
    dateModified: "17 Jun, 2027",
  },
  {
    id: 7,
    fileName: "Video_09783_882943.mp4",
    category: "Video",
    size: "309 MB",
    dateModified: "27 Jul, 2027",
  },
];

export default function RecentFilesTable() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Recent Files</h3>
        <Link
          href="#"
          className="text-sm font-medium text-brand-500 hover:text-brand-600"
        >
          View All
        </Link>
      </div>
      <div className="overflow-hidden">
        <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
              File Name
            </TableCell>
            <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
              Category
            </TableCell>
            <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
              Size
            </TableCell>
            <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
              Date Modified
            </TableCell>
            <TableCell className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
              Action
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-gray-100">
          {filesData.map((file) => (
            <TableRow key={file.id}>
              <TableCell className="px-5 py-4 text-gray-800 text-theme-sm font-medium">
                {file.fileName}
              </TableCell>
              <TableCell className="px-5 py-4 text-gray-500 text-theme-sm">
                {file.category}
              </TableCell>
              <TableCell className="px-5 py-4 text-gray-500 text-theme-sm">
                {file.size}
              </TableCell>
              <TableCell className="px-5 py-4 text-gray-500 text-theme-sm">
                {file.dateModified}
              </TableCell>
              <TableCell className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <button className="text-gray-400 hover:text-gray-700 transition-colors">
                    <EyeIcon className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-error-500 transition-colors">
                    <TrashBinIcon className="w-5 h-5" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </div>
  );
}

