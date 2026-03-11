import CalculatorLayout from "../components/CalculatorLayout"

export default function Page() {
  return (
    <CalculatorLayout
      title="Gizlilik Politikası"
      description="HesapUzmani sitesinin gizlilik politikası ve kullanıcı verilerinin nasıl işlendiğine dair bilgilendirme."
    >
      <div className="mt-6 text-gray-700 leading-7 space-y-6">
        <p>
          HesapUzmani olarak ziyaretçilerimizin gizliliğine önem veriyoruz. Bu
          gizlilik politikası, sitemizi kullandığınızda hangi bilgilerin
          toplanabileceğini ve bu bilgilerin nasıl kullanılabileceğini açıklar.
        </p>

        <h2 className="text-xl font-semibold">1. Toplanan Bilgiler</h2>
        <p>
          Sitemiz üzerinde doğrudan kişisel veri toplanmamaktadır. Ancak ziyaret
          sırasında tarayıcı bilgileri, cihaz bilgileri, IP adresi ve kullanım
          istatistikleri gibi bazı teknik veriler hizmet sağlayıcılar veya analiz
          araçları aracılığıyla işlenebilir.
        </p>

        <h2 className="text-xl font-semibold">2. Çerezler (Cookies)</h2>
        <p>
          HesapUzmani, kullanıcı deneyimini geliştirmek ve site performansını
          analiz etmek amacıyla çerezler kullanabilir. Çerezler, tarayıcınızda
          saklanan küçük veri dosyalarıdır. Tarayıcı ayarlarınız üzerinden
          çerezleri silebilir veya engelleyebilirsiniz.
        </p>

        <h2 className="text-xl font-semibold">3. Reklam Hizmetleri</h2>
        <p>
          Sitemizde Google AdSense gibi üçüncü taraf reklam hizmetleri
          kullanılabilir. Bu hizmetler, kullanıcıların ilgi alanlarına göre reklam
          göstermek amacıyla çerezlerden yararlanabilir. Google’ın veri kullanımı
          hakkında daha fazla bilgi için ilgili reklam ve gizlilik politikaları
          incelenebilir.
        </p>

        <h2 className="text-xl font-semibold">4. Üçüncü Taraf Bağlantılar</h2>
        <p>
          Sitede üçüncü taraf web sitelerine yönlendiren bağlantılar bulunabilir.
          Bu sitelerin gizlilik uygulamalarından HesapUzmani sorumlu değildir.
          Kullanıcıların ilgili sitelerin kendi gizlilik politikalarını incelemesi
          önerilir.
        </p>

        <h2 className="text-xl font-semibold">5. Veri Güvenliği</h2>
        <p>
          Ziyaretçi verilerinin güvenliği bizim için önemlidir. Ancak internet
          üzerinden yapılan veri iletimlerinin tamamen güvenli olduğu garanti
          edilemez. Bu nedenle kullanıcılar siteyi kendi sorumlulukları altında
          kullanır.
        </p>

        <h2 className="text-xl font-semibold">6. Politika Değişiklikleri</h2>
        <p>
          Gizlilik politikası zaman zaman güncellenebilir. Güncellenen sürüm bu
          sayfada yayımlandığı andan itibaren geçerli olur.
        </p>

        <h2 className="text-xl font-semibold">7. İletişim</h2>
        <p>
          Gizlilik politikası hakkında sorularınız olması halinde iletişim sayfası
          üzerinden bizimle iletişime geçebilirsiniz.
        </p>
      </div>
    </CalculatorLayout>
  )
}