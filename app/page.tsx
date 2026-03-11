const hesaplamalar = [
  {
    href: "/kredi-hesaplama",
    title: "Kredi Hesaplama",
    description: "Aylık kredi taksitini öğren",
  },
  {
    href: "/kdv-hesaplama",
    title: "KDV Hesaplama",
    description: "KDV dahil fiyatı hesapla",
  },
  {
    href: "/hisse-kar-zarar",
    title: "Hisse Kar/Zarar",
    description: "Hisse kazancını hesapla",
  },
  {
    href: "/kira-artis-hesaplama",
    title: "Kira Artış Hesaplama",
    description: "Yeni kira tutarını hesapla",
  },
  {
    href: "/faiz-hesaplama",
    title: "Faiz Hesaplama",
    description: "Faiz getirini öğren",
  },
  {
    href: "/yuzde-hesaplama",
    title: "Yüzde Hesaplama",
    description: "Yüzde artış ve indirim hesapla",
  },
  {
    href: "/altin-hesaplama",
    title: "Altın Hesaplama",
    description: "Gram altının toplam değerini hesapla",
  },
  {
    href: "/dolar-hesaplama",
    title: "Dolar Hesaplama",
    description: "Doların TL karşılığını hesapla",
  },
  {
    href: "/maas-hesaplama",
    title: "Net Maaş Hesaplama",
    description: "Brüt maaşa göre net maaşı hesapla",
  },
  {
    href: "/tapu-harci-hesaplama",
    title: "Tapu Harcı Hesaplama",
    description: "Ev satış fiyatına göre tapu harcını hesapla",
  },
  {
    href: "/arac-km-maliyeti",
    title: "Araç KM Maliyeti",
    description: "Aracınızın kilometre başına yakıt maliyetini hesaplayın",
  },
  {
    href: "/kar-zarar-hesaplama",
    title: "Kar / Zarar Hesaplama",
    description: "Maliyet ve satış fiyatına göre kar hesapla",
  },
  {
    href: "/mevduat-faiz-hesaplama",
    title: "Mevduat Faiz Getirisi",
    description: "Anapara ve faiz oranına göre net getiriyi hesapla",
  },
  {
    href: "/enflasyon-hesaplama",
    title: "Enflasyon Hesaplama",
    description: "Aylık enflasyon oranlarından kümülatif enflasyonu hesapla",
  },
  {
  href: "/yas-hesaplama",
  title: "Yaş Hesaplama",
  description: "Doğum tarihinizi girerek kaç yaşında olduğunuzu öğrenin",
},
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-5xl font-bold mb-6">KolayHesapla</h1>

        <p className="text-xl opacity-90">
          Kredi, KDV, altın ve finans hesaplama araçları
        </p>
      </section>

      <section className="max-w-6xl mx-auto p-10">
        <h2 className="text-2xl font-semibold mb-8">Hesaplama Araçları</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {hesaplamalar.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}