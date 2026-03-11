```tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          KolayHesapla
        </h1>

        <p className="text-xl max-w-2xl mx-auto mb-8">
          Kredi, faiz, KDV, enflasyon, maaş ve günlük hesaplama araçlarını
          tek yerde ücretsiz kullanın.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/kredi-hesaplama" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">
            Kredi
          </Link>

          <Link href="/faiz-hesaplama" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">
            Faiz
          </Link>

          <Link href="/enflasyon-hesaplama" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">
            Enflasyon
          </Link>

          <Link href="/yas-hesaplama" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">
            Yaş
          </Link>
        </div>
      </section>


      {/* HESAPLAMA ARAÇLARI */}
      <section className="max-w-6xl mx-auto px-4 py-16">

        <h2 className="text-3xl font-bold mb-6">
          Hesaplama Araçları
        </h2>

        <p className="text-gray-600 mb-10">
          Finans, yatırım ve günlük yaşam için ihtiyaç duyabileceğiniz ücretsiz hesaplama araçlarını kullanabilirsiniz.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <Link href="/kredi-hesaplama" className="border rounded-xl p-6 hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Kredi Hesaplama</h3>
            <p className="text-gray-600">Aylık kredi taksitini öğren</p>
          </Link>

          <Link href="/kdv-hesaplama" className="border rounded-xl p-6 hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">KDV Hesaplama</h3>
            <p className="text-gray-600">KDV dahil fiyat hesapla</p>
          </Link>

          <Link href="/faiz-hesaplama" className="border rounded-xl p-6 hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Faiz Hesaplama</h3>
            <p className="text-gray-600">Faiz getirisini öğren</p>
          </Link>

          <Link href="/yuzde-hesaplama" className="border rounded-xl p-6 hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Yüzde Hesaplama</h3>
            <p className="text-gray-600">Yüzde artış ve indirim hesapla</p>
          </Link>

          <Link href="/enflasyon-hesaplama" className="border rounded-xl p-6 hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Enflasyon Hesaplama</h3>
            <p className="text-gray-600">Enflasyon etkisini hesapla</p>
          </Link>

          <Link href="/kira-artis-hesaplama" className="border rounded-xl p-6 hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Kira Artış Hesaplama</h3>
            <p className="text-gray-600">Yeni kira tutarını hesapla</p>
          </Link>

        </div>
      </section>


      {/* SEO METNİ */}
      <section className="max-w-4xl mx-auto px-4 py-16">

        <h2 className="text-3xl font-bold mb-6">
          Online Hesaplama Araçları
        </h2>

        <p className="mb-4 text-gray-700">
          HesapUzmanı, günlük hayatta ihtiyaç duyabileceğiniz finans ve hesaplama araçlarını
          tek bir yerde sunar. Kredi hesaplama, faiz hesaplama, KDV hesaplama ve yüzde
          hesaplama gibi işlemleri hızlı ve ücretsiz şekilde yapabilirsiniz.
        </p>

        <p className="mb-4 text-gray-700">
          Sitemizde yer alan araçlar sayesinde kredi taksitlerini hesaplayabilir,
          enflasyon oranlarına göre değer değişimlerini görebilir ve kira artış
          hesaplamalarını kolayca yapabilirsiniz.
        </p>

        <p className="text-gray-700">
          HesapUzmanı sürekli güncellenen hesaplama araçları ile finansal planlamanızı
          daha kolay yapmanıza yardımcı olur.
        </p>

      </section>

    </main>
  );
}
```
