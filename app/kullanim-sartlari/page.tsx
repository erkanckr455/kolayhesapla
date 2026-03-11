import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  return (
    <CalculatorLayout
      title="Kullanım Şartları"
      description="HesapUzmani sitesinin kullanım şartları ve yasal bilgilendirme."
    >
      <div className="mt-6 text-gray-700 leading-7 space-y-5">

        <p>
          Bu web sitesini kullanarak aşağıdaki kullanım şartlarını kabul etmiş
          sayılırsınız. HesapUzmani sitesi finansal hesaplama araçları
          sunmaktadır ancak verilen sonuçlar yalnızca bilgilendirme amaçlıdır.
        </p>

        <h2 className="text-xl font-semibold">1. Bilgilendirme</h2>
        <p>
          Sitede yer alan hesaplama araçları genel hesaplama mantığı ile
          çalışmaktadır. Finansal kararlar almadan önce profesyonel bir
          uzmandan destek almanız önerilir.
        </p>

        <h2 className="text-xl font-semibold">2. Sorumluluk Reddi</h2>
        <p>
          HesapUzmani sitesi üzerinde yer alan bilgiler ve hesaplama
          sonuçlarının doğruluğu garanti edilmez. Kullanıcılar siteyi kendi
          sorumlulukları altında kullanırlar.
        </p>

        <h2 className="text-xl font-semibold">3. Hizmet Değişiklikleri</h2>
        <p>
          Site yönetimi, herhangi bir zamanda hizmetleri değiştirme veya
          kaldırma hakkını saklı tutar.
        </p>

        <h2 className="text-xl font-semibold">4. Reklamlar</h2>
        <p>
          Bu site Google AdSense gibi reklam servislerini kullanabilir.
          Reklam sağlayıcılar çerezler aracılığıyla kullanıcı deneyimini
          geliştirmek amacıyla veri toplayabilir.
        </p>

        <h2 className="text-xl font-semibold">5. İletişim</h2>
        <p>
          Site ile ilgili sorularınız için iletişim sayfasını kullanabilirsiniz.
        </p>

      </div>
    </CalculatorLayout>
  )
}