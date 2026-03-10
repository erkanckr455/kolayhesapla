import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KolayHesapla - Kredi, KDV, Yüzde ve Finans Hesaplama Araçları",
  description:
    "Kredi hesaplama, KDV hesaplama, yüzde hesaplama, hisse kar zarar ve temettü hesaplama araçları. Tüm finans hesaplamaları tek yerde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-100`}>
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
            <a href="/" className="text-xl font-bold">
              KolayHesapla
            </a>

            <div className="space-x-6">
              <a href="/kredi-hesaplama" className="hover:text-blue-600">
                Kredi
              </a>

              <a href="/kdv-hesaplama" className="hover:text-blue-600">
                KDV
              </a>

              <a href="/hisse-kar-zarar" className="hover:text-blue-600">
                Hisse
              </a>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}