export default function sitemap() {
  const baseUrl = "https://www.hesapuzmani.site"

  return [
    { url: `${baseUrl}`, lastModified: new Date() },

    { url: `${baseUrl}/yuzde-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/yuzde-degisim-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/kredi-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/faiz-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/kdv-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/iskonto-hesaplama`, lastModified: new Date() },

    { url: `${baseUrl}/altin-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/dolar-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/maas-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/enflasyon-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/yas-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/kar-zarar-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/hisse-kar-zarar`, lastModified: new Date() },
    { url: `${baseUrl}/kira-artis-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/arac-km-maliyeti`, lastModified: new Date() },
    { url: `${baseUrl}/iki-tarih-arasi-gun-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/mevduat-faiz-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/temettu-hesaplama`, lastModified: new Date() },
    { url: `${baseUrl}/tapu-harci-hesaplama`, lastModified: new Date() },

    { url: `${baseUrl}/gizlilik-politikasi`, lastModified: new Date() },
    { url: `${baseUrl}/kullanim-sartlari`, lastModified: new Date() },
    { url: `${baseUrl}/iletisim`, lastModified: new Date() },
  ]
}