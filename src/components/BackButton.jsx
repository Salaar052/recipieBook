"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-primary hover:underline font-medium"
    >
      ← Go Back
    </button>
  );
}
