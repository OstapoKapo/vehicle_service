'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="page justify-center">
      <p className="text-4xl text-theme font-bold">Welcome to the Vehicle Management System</p>
      <div className="flex gap-4 mt-8 items-center justify-center">
        <Link href="/users" className="btn btn-primary">
          Manage Users
        </Link>
        <Link href="/vehicles" className="btn btn-primary bg-secondary">
          Manage Vehicles
        </Link>
      </div>
    </div>
  );
}
