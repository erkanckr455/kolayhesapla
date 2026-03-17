"use client"

import { useState } from "react"
import CalculatorLayout from "../components/CalculatorLayout"

export default function KarMarjiHesaplama() {

const [sonuc, setSonuc] = useState("")

function hesapla() {

const maliyet = Number((document.getElementById("maliyet") as HTMLInputElement).value)
const satis = Number((document.getElementById("satis") as HTMLInputElement).value)

if (!maliyet || !satis) {
  setSonuc("Lütfen tüm alanları doldurun")
  return
}

const kar = satis - maliyet
const oran = (kar / maliyet) * 100

setSonuc(
  "Kar: " + kar.toFixed(2) + " TL | Kar Marjı: %" + oran.toFixed(2)
)

}

return (

<CalculatorLayout
title="Kar Marjı Hesaplama"
description="Ürün maliyetine ve satış fiyatına göre kar marjını kolayca hesaplayın."
>

<div className="space-y-5">

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">
Ürün Maliyeti (TL)
</label>

<input
id="maliyet"
type="number"
placeholder="Örn: 100"
className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
/>
</div>

<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">
Satış Fiyatı (TL)
</label>

<input
id="satis"
type="number"
placeholder="Örn: 150"
className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-lg outline-none focus:border-blue-500 focus:bg-white"
/>
</div>

<button
onClick={hesapla}
className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
>
Hesapla
</button>

</div>

{sonuc && (
<div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">

<p className="text-lg font-semibold text-blue-900 mb-3">
Kar Marjı Sonucu
</p>

<p className="text-gray-800">
{sonuc}
</p>

</div>
)}

<div className="mt-12 space-y-6 text-gray-700 leading-7">

<h2 className="text-2xl font-bold text-gray-900">
Kar Marjı Hesaplama Nedir?
</h2>

<p>
Kar marjı hesaplama bir ürünün maliyeti ile satış fiyatı arasındaki farkı
görmek için kullanılır. İşletmeler satıştan ne kadar kazandığını görmek için
kar marjı hesaplama yöntemini kullanır.
</p>

<h2 className="text-2xl font-bold text-gray-900">
Kar Marjı Nasıl Hesaplanır?
</h2>

<p>
Kar marjı hesaplama formülü şu şekildedir:
</p>

<p className="font-semibold">
Kar Marjı = (Satış Fiyatı - Maliyet) / Maliyet × 100
</p>

<h2 className="text-2xl font-bold text-gray-900">
Örnek Kar Marjı Hesaplama
</h2>

<p>100 TL maliyet ile 150 TL satış → %50 kar</p>
<p>200 TL maliyet ile 260 TL satış → %30 kar</p>
<p>500 TL maliyet ile 650 TL satış → %30 kar</p>

</div>

</CalculatorLayout>

)

}