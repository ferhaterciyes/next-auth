"use client";

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    }
  });

  if (status === "loading") {
    return <p className="p-10 text-center">Yükleniyor...</p>;
  }

  const isAdmin = session?.role === "admin" ;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <div className="max-w-4xl mx-auto p-10">
        <div className="bg-white dark:bg-zinc-800 rounded shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <div className="space-y-4">
            <p className="text-lg">Hoş geldin, {session?.user?.name || "kullanıcı"}!</p>
            <p className="text-md">Rol: {session?.role || "user"}</p>
            
            {session?.user?.email && (
              <p className="text-gray-600 dark:text-gray-300">
                E-posta: {session.user.email}
              </p>
            )}
            
            <div className="mt-6 p-4 bg-gray-50 dark:bg-zinc-700 rounded">
              <h2 className="font-medium mb-2">Oturum Bilgileri</h2>
              <pre className="text-xs overflow-auto p-2 bg-gray-100 dark:bg-zinc-800 rounded">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}