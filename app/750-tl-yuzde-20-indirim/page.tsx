import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  return (
    <CalculatorLayout
      title="750 TL %20 indirim ne kadar?"
      description="750 TL yüzde 20 indirim hesaplama sonucu ve indirimli fiyat"
    >
      <div className="mt-6 text-gray-700 leading-7 space-y-6">

        <h1 className="text-2xl font-bold">
          750 TL’nin %20 indirimi ne kadar?
        </h1>

        <p>
          750 TL’nin yüzde 20 indirimi 150 TL’dir. İndirimli fiyat 600 TL olur.
        </p>

        <h2 className="text-xl font-semibold">İndirim Tutarı</h2>
        <p>150 TL</p>

        <h2 className="text-xl font-semibold">İndirimli Fiyat</h2>
        <p>600 TL</p>

        <h2 className="text-xl font-semibold">Nasıl hesaplanır?</h2>
        <p>
          750 × 20 / 100 = 150 TL indirim tutarıdır.
          750 - 150 = 600 TL indirimli fiyat olur.
        </p>

        <h2 className="text-xl font-semibold">Benzer hesaplamalar</h2>

        <ul className="list-disc ml-5 space-y-1">
          <li>
            <a href="/1000-tl-yuzde-20-indirim" className="text-blue-600 hover:underline">
              1000 TL %20 indirim
            </a>
          </li>
          <li>
            <a href="/500-tl-yuzde-30-indirim" className="text-blue-600 hover:underline">
              500 TL %30 indirim
            </a>
          </li>
          <li>
            <a href="/2000-tl-yuzde-10-indirim" className="text-blue-600 hover:underline">
              2000 TL %10 indirim
            </a>
          </li>
        </ul>

      </div>
    </CalculatorLayout>
  )
}