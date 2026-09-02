"use client";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export function useApi<T>(url: string) {
  const { data, error, isLoading } = useSWR<T>(url, fetcher);
  return { data, error, isLoading };
}
