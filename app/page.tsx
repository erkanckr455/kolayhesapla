import Link from "next/link"

const hesaplamalar = [
  { href: "/kredi-hesaplama", title: "Kredi Hesaplama", desc: "Aylık kredi taksitini öğren" },
  { href: "/kdv-hesaplama", title: "KDV Hesaplama", desc: "KDV dahil fiyatı hesapla" },
  { href: "/hisse-kar-zarar", title: "Hisse Kar/Zarar", desc: "Hisse kazancını hesapla" },
  { href: "/faiz-hesaplama", title: "Faiz Hesaplama", desc: "Faiz getirini öğren" },
  { href: "/yuzde-hesaplama", title: "Yüzde Hesaplama", desc: "Yüzde artış ve indirim hesapla" },
  { href: "/altin-hesaplama", title: "Altın Hesaplama", desc: "Gram altının değerini hesapla" },
  { href: "/dolar-hesaplama", title: "Dolar Hesaplama", desc: "Doların TL karşılığını hesapla" },
  { href: "/maas-hesaplama", title: "Net Maaş", desc: "Brüt maaştan net maaşı hesapla" },
  { href: "/enflasyon-hesaplama", title: "Enflasyon Hesaplama", desc: "Aylık enflasyon hesapla" },
  { href: "/yas-hesaplama", title: "Yaş Hesaplama", desc: "Doğum tarihinize göre yaş hesapla" },
  { href: "/arac-km-maliyeti", title: "Araç KM Maliyeti", desc: "1 km ve 100 km yakıt maliyetini hesapla" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold mb-4">
            HesapUzmani
          </h1>

          <p className="text-lg text-blue-100">
            Kredi, faiz, KDV, enflasyon ve günlük hesaplama araçları.
          </p>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold mb-8">
          Hesaplama Araçları
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {hesaplamalar.map((h) => (
            <Link
              key={h.href}
              href={h.href}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >

              <h3 className="text-xl font-semibold mb-2">
                {h.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {h.desc}
              </p>

            </Link>
          ))}

        </div>

      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-xl shadow p-8">

          <h2 className="text-2xl font-bold mb-4">
            Online Hesaplama Araçları
          </h2>

          <p className="text-gray-700 mb-4">
            HesapUzmani sitesi kredi hesaplama, faiz hesaplama, KDV hesaplama ve
            birçok finansal hesaplama aracını ücretsiz olarak sunar.
          </p>

          <p className="text-gray-700">
            Hesaplama araçlarını kullanarak finansal planlamanızı kolayca
            yapabilirsiniz.
          </p>

        </div>

      </section>

    </main>
  )
}