"use client";
import Link from "next/link";
export function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="text-xl font-bold">Home</Link>
        <Link href="/dashboard" className="ml-4 hover:text-blue-500">Dashboard</Link>
      </div>
    </nav>
  );
}
