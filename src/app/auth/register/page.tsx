"use client";
import { useState } from "react";
export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form className="rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold">Register</h1>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-4 w-full rounded border p-2" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4 w-full rounded border p-2" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 w-full rounded border p-2" />
        <button type="submit" className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
}
