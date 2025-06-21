"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    // Check if user is not an admin
    if (status === "authenticated" && session?.role !== "admin") {
      redirect("/dashboard");
    }
    
    if (status === "unauthenticated") {
      redirect("/");
    }
  }, [status, session]);

  if (status === "loading") {
    return <p className="p-10 text-center">Yükleniyor...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="max-w-4xl mx-auto p-10">
        <div className="bg-white dark:bg-zinc-800 rounded shadow p-6">
          <h1 className="text-2xl font-bold mb-6">Admin Paneli</h1>
          <p>Bu sayfayı yalnızca admin rolündeki kullanıcılar görebilir.</p>
          
          <div className="mt-6 p-4 bg-gray-50 dark:bg-zinc-700 rounded">
            <pre className="text-xs overflow-auto p-2 bg-gray-100 dark:bg-zinc-800 rounded">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}