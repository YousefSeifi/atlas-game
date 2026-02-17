"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("ordering", e.target.value);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex gap-4">
      <select
        onChange={handleChange}
        className="bg-gray-800 text-white p-2 rounded"
      >
        <option value="">Sort By</option>
        <option value="-rating">Top Rated</option>
        <option value="-released">Newest</option>
      </select>
    </div>
  );
}


