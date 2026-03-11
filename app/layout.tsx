import type { Metadata } from "next"
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
        {children}
      </body>
    </html>
  )
}