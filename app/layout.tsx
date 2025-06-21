import "./globals.css";
import AuthProvider from "./component/providers/SessionProvider";
import Navbar from "./component/navigation";

export const metadata = {
  title: "Auth0 + NextAuth Demo",
  description: "JWT tabanlı oturum kontrolü",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}