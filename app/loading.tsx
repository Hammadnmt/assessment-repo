"use client";
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-700 font-medium text-lg">Loading...</p>
      </div>
    </div>
  );
}
