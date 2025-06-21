"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const isAdmin = session?.role === "admin";
  const isAuthenticated = status === "authenticated";

const handleSignOut = async () => {
    // Auth0 domain ve client ID çevre değişkenlerinden gelebilir ya da hardcoded olabilir
    const auth0Domain = "https://dev-uibk3wad2ihmj7nh.us.auth0.com";
    const clientId = "3PC7kYcUvq35zHrM4JgcLlfcuyvPvI2A";
    const returnTo = encodeURIComponent("http://localhost:3000");
    
    // Önce NextAuth oturumunu sonlandır
    await signOut({ redirect: false });
    
    // Sonra Auth0 logout URL'sine yönlendir
    window.location.href = `${auth0Domain}/v2/logout?client_id=${clientId}&returnTo=${returnTo}`;
  };
  return (
    <nav className="bg-white dark:bg-zinc-900 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">NextAuth Demo</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
             
              {isAuthenticated && (
                <Link 
                  href="/dashboard"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === "/dashboard" 
                      ? "border-indigo-500 text-gray-900 dark:text-white" 
                      : "border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Dashboard
                </Link>
              )}
              
              {isAdmin && (
                <Link 
                  href="/admin"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === "/admin" 
                      ? "border-indigo-500 text-gray-900 dark:text-white" 
                      : "border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Admin Panel
                </Link>
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isAuthenticated ? (
            <button
          onClick={handleSignOut}
          className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-50 dark:hover:bg-zinc-800"
        >
          Çıkış Yap
        </button>
            ) : (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Giriş Yapın
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="sm:hidden border-t border-gray-200 dark:border-zinc-700">
        <div className="px-2 py-3 space-y-1">
          <Link 
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === "/" 
                ? "bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-300" 
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800"
            }`}
          >
            Ana Sayfa
          </Link>
          
          {isAuthenticated && (
            <Link 
              href="/dashboard"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/dashboard" 
                  ? "bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-300" 
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800"
              }`}
            >
              Dashboard
            </Link>
          )}
          
          {isAdmin && (
            <Link 
              href="/admin"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === "/admin" 
                  ? "bg-indigo-50 dark:bg-indigo-900 border-indigo-500 text-indigo-700 dark:text-indigo-300" 
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800"
              }`}
            >
              Admin Panel
            </Link>
          )}
          
          {isAuthenticated && (
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-50 dark:hover:bg-zinc-800"
            >
              Çıkış Yap
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}