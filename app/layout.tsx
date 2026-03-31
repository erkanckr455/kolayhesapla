import type { Metadata } from "next"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hesap Uzmanı - Tüm Hesaplama Araçları",
  description:
    "Kredi, faiz, KDV, yüzde, iskonto, maaş ve enflasyon hesaplama araçlarını ücretsiz kullanın.",
  metadataBase: new URL("https://www.hesapuzmani.site"),
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>

        {/* GOOGLE SEARCH CONSOLE */}
        <meta name="google-site-verification" content="61I1FluLfb6uFFAPvARQrRSzesR_E69qdP0GjJIc2jc" />

        {/* GOOGLE ADSENSE */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7494215615753370"
          crossOrigin="anonymous"
        ></script>

        {/* CANONICAL */}
        <link rel="canonical" href="https://www.hesapuzmani.site" />

      </head>

      <body className="bg-gray-100 flex flex-col min-h-screen">

        <header className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

            <Link href="/" className="text-xl font-bold text-blue-600">
              Hesap Uzmanı
            </Link>

            <nav className="flex gap-6 text-gray-700 font-medium">
              <Link href="/kredi-hesaplama">Kredi</Link>
              <Link href="/kdv-hesaplama">KDV</Link>
              <Link href="/hisse-kar-zarar">Hisse</Link>
              <Link href="/faiz-hesaplama">Faiz</Link>
            </nav>

          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-white border-t mt-10">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">

            <div className="flex justify-center gap-6 mb-3">
              <Link href="/iletisim" className="hover:text-blue-600">
                İletişim
              </Link>

              <Link href="/gizlilik-politikasi" className="hover:text-blue-600">
                Gizlilik Politikası
              </Link>

              <Link href="/kullanim-sartlari" className="hover:text-blue-600">
                Kullanım Şartları
              </Link>
            </div>

            <p className="text-sm">
              © {new Date().getFullYear()} HesapUzmani.site - Tüm hakları saklıdır.
            </p>

          </div>
        </footer>

      </body>
    </html>
  )
}