"use client";
export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" {...props}>{children}</button>;
}
