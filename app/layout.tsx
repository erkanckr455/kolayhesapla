import type { Metadata } from "next"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: "KolayHesapla",
  description: "Kredi, faiz, KDV, enflasyon ve maaş hesaplama araçları"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7494215615753370"
          crossOrigin="anonymous"
        ></script>

      </head>

      <body>

        <header className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

            <Link href="/" className="text-xl font-bold text-blue-600">
              KolayHesapla
            </Link>

            <nav className="flex gap-6 text-gray-700 font-medium">
              <Link href="/kredi-hesaplama">Kredi</Link>
              <Link href="/kdv-hesaplama">KDV</Link>
              <Link href="/hisse-kar-zarar">Hisse</Link>
              <Link href="/faiz-hesaplama">Faiz</Link>
            </nav>

          </div>
        </header>

        <main className="min-h-screen bg-gray-100">
          {children}
        </main>

      </body>
    </html>
  )
}