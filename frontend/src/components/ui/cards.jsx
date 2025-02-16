import React from "react";

export function Card({ children, className }) {
  return <div className={`rounded-lg shadow-md p-4 bg-white ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="mb-3">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
