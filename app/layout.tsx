export const metadata = {
  title: "HesapUzmanı - Finans Hesaplama Araçları",
  description:
    "Kredi, faiz, KDV, enflasyon, maaş ve günlük hesaplama araçlarını ücretsiz kullanın.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <meta
          name="google-site-verification"
          content="61I1FluLfb6uFFAPvARQrRSzesR_E69qdP0GjJIc2jc"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}