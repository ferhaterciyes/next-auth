"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="p-10 text-center">Oturum kontrol ediliyor...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <div className="p-8 bg-white dark:bg-zinc-800 rounded shadow text-center space-y-6 max-w-md w-full">
        <h1 className="text-3xl font-bold">Next.js Auth Demo</h1>
        <p className="text-lg">JWT tabanlı oturum kontrolü ve Auth0 entegrasyonu örneği</p>
        
        <div className="flex flex-col gap-4">
          <button
            onClick={() => signIn("auth0", { callbackUrl: "/dashboard" })}
            className="block w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-center"
          >
            Auth0 ile Giriş Yap
          </button>
          
          <div className="text-sm opacity-70">
            Bu proje NextAuth.js ve Auth0 kullanılarak oluşturulmuştur
          </div>
        </div>
      </div>
    </div>
  );
}