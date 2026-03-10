export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

        <h1 className="text-5xl font-bold mb-6">
          KolayHesapla
        </h1>

        <p className="text-xl opacity-90">
          Kredi, KDV, altın ve finans hesaplama araçları
        </p>

      </section>


      {/* HESAPLAMA KARTLARI */}

      <section className="max-w-6xl mx-auto p-10">

        <h2 className="text-2xl font-semibold mb-8">
          Hesaplama Araçları
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <a href="/kredi-hesaplama" className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Kredi Hesaplama
            </h3>
            <p className="text-gray-500">
              Aylık kredi taksitini öğren
            </p>
          </a>

          <a href="/kdv-hesaplama" className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              KDV Hesaplama
            </h3>
            <p className="text-gray-500">
              KDV dahil fiyatı hesapla
            </p>
          </a>

          <a href="/hisse-kar-zarar" className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Hisse Kar/Zarar
            </h3>
            <p className="text-gray-500">
              Hisse kazancını hesapla
            </p>
          </a>

          <a href="/kira-artis-hesaplama" className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Kira Artış Hesaplama
            </h3>
            <p className="text-gray-500">
              Yeni kira tutarını hesapla
            </p>
          </a>

          <a href="/faiz-hesaplama" className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Faiz Hesaplama
            </h3>
            <p className="text-gray-500">
              Faiz getirini öğren
            </p>
          </a>

          <a href="/yuzde-hesaplama" className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Yüzde Hesaplama
            </h3>
            <p className="text-gray-500">
              Yüzde artış ve indirim hesapla
            </p>
          </a>
<a href="/altin-hesaplama" className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
  <h3 className="text-xl font-semibold mb-2">
    Altın Hesaplama
  </h3>
  <p className="text-gray-500">
    Gram altının toplam değerini hesapla
  </p>
</a>

        </div>

      </section>

    </main>
  )
}