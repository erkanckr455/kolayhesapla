const hesaplamalar = [
  { href: "/kredi-hesaplama", title: "Kredi Hesaplama", description: "Aylık kredi taksitini öğren", icon: "💳" },
  { href: "/kdv-hesaplama", title: "KDV Hesaplama", description: "KDV dahil fiyatı hesapla", icon: "🧾" },
  { href: "/hisse-kar-zarar", title: "Hisse Kar/Zarar", description: "Hisse kazancını hesapla", icon: "📈" },
  { href: "/kira-artis-hesaplama", title: "Kira Artış Hesaplama", description: "Yeni kira tutarını hesapla", icon: "🏠" },
  { href: "/faiz-hesaplama", title: "Faiz Hesaplama", description: "Faiz getirini öğren", icon: "💰" },
  { href: "/yuzde-hesaplama", title: "Yüzde Hesaplama", description: "Yüzde artış ve indirim hesapla", icon: "📊" },
  { href: "/altin-hesaplama", title: "Altın Hesaplama", description: "Gram altının toplam değerini hesapla", icon: "🪙" },
  { href: "/dolar-hesaplama", title: "Dolar Hesaplama", description: "Doların TL karşılığını hesapla", icon: "💵" },
  { href: "/maas-hesaplama", title: "Net Maaş Hesaplama", description: "Brüt maaşa göre net maaşı hesapla", icon: "👔" },
  { href: "/tapu-harci-hesaplama", title: "Tapu Harcı Hesaplama", description: "Ev satış fiyatına göre tapu harcını hesapla", icon: "🏘️" },
  { href: "/arac-km-maliyeti", title: "Araç KM Maliyeti", description: "Aracınızın kilometre başına yakıt maliyetini hesaplayın", icon: "🚗" },
  { href: "/kar-zarar-hesaplama", title: "Kar / Zarar Hesaplama", description: "Maliyet ve satış fiyatına göre kar hesapla", icon: "📉" },
  { href: "/mevduat-faiz-hesaplama", title: "Mevduat Faiz Getirisi", description: "Anapara ve faiz oranına göre net getiriyi hesapla", icon: "🏦" },
  { href: "/enflasyon-hesaplama", title: "Enflasyon Hesaplama", description: "Aylık enflasyon oranlarından kümülatif enflasyonu hesapla", icon: "📌" },
  { href: "/yas-hesaplama", title: "Yaş Hesaplama", description: "Doğum tarihinizi girerek kaç yaşında olduğunuzu öğrenin", icon: "🎂" },
  { href: "/iki-tarih-arasi-gun-hesaplama", title: "İki Tarih Arası Gün Hesaplama", description: "İki tarih arasındaki gün sayısını hesaplayın", icon: "📅" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            KolayHesapla
          </h1>

          <p className="text-lg md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Kredi, faiz, KDV, enflasyon, maaş ve günlük hesaplama araçlarını
            tek yerde ücretsiz kullanın.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">

            <a href="/kredi-hesaplama" className="bg-white/15 px-4 py-2 rounded-full hover:bg-white/25 transition">
              Kredi
            </a>

            <a href="/faiz-hesaplama" className="bg-white/15 px-4 py-2 rounded-full hover:bg-white/25 transition">
              Faiz
            </a>

            <a href="/enflasyon-hesaplama" className="bg-white/15 px-4 py-2 rounded-full hover:bg-white/25 transition">
              Enflasyon
            </a>

            <a href="/maas-hesaplama" className="bg-white/15 px-4 py-2 rounded-full hover:bg-white/25 transition">
              Maaş
            </a>

            <a href="/yas-hesaplama" className="bg-white/15 px-4 py-2 rounded-full hover:bg-white/25 transition">
              Günlük Hesaplama
            </a>

          </div>

        </div>
      </section>


      {/* HESAPLAMA KARTLARI */}

      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Hesaplama Araçları
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Finans, yatırım ve günlük yaşam için ihtiyaç duyabileceğiniz
          ücretsiz hesaplama araçlarını kullanabilirsiniz.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {hesaplamalar.map((item) => (

            <a
              key={item.href}
              href={item.href}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1"
            >

              <div className="text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                {item.description}
              </p>

            </a>

          ))}

        </div>

      </section>


      {/* SEO ALANI */}

      <section className="max-w-6xl mx-auto px-6 pb-12">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            KolayHesapla Nedir?
          </h2>

          <p className="text-gray-700 leading-7 mb-4">
            KolayHesapla; kredi hesaplama, faiz hesaplama, KDV hesaplama,
            yüzde hesaplama, enflasyon hesaplama ve daha birçok finansal
            hesaplama aracını ücretsiz sunan bir platformdur.
          </p>

          <p className="text-gray-700 leading-7">
            Kullanıcılar finansal ve günlük hesaplamalarını hızlı,
            pratik ve doğru şekilde yapabilmek için bu araçları
            kolayca kullanabilir.
          </p>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="bg-white border-t border-gray-200">

        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-600 text-sm">
            © 2026 KolayHesapla
          </p>

          <div className="flex gap-4 text-sm">

            <a href="/gizlilik-politikasi" className="text-gray-600 hover:text-blue-600">
              Gizlilik Politikası
            </a>

          </div>

        </div>

      </footer>

    </main>
  )
}