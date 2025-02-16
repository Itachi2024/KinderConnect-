import React from "react";

export function Badge({ children, className }) {
  return <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 ${className}`}>{children}</span>;
}
