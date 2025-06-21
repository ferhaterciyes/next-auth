Next.js Auth Demo 🔐
<img alt="Next.js" src="https://img.shields.io/badge/Next.js-14+-000000?style=for-the-badge&amp;logo=next.js">
<img alt="Auth0" src="https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&amp;logo=auth0&amp;logoColor=white">
<img alt="JWT" src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&amp;logo=JSON web tokens">
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&amp;logo=typescript&amp;logoColor=white">
<img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&amp;logo=tailwindcss&amp;logoColor=white">
Modern ve güvenli kimlik yönetimi çözümü: Next.js 14+, Auth0 ve JWT entegrasyonuyla tam kapsamlı rol-bazlı yetkilendirme sistemi.

✨ Özellikler
🔒 Kimlik Doğrulama Sistemi
Auth0 OAuth: Hızlı ve güvenli kimlik doğrulama
JWT Oturum Yönetimi: Stateless ve güvenli token-bazlı oturum sistemi
Rol Bazlı Kontroller: Admin ve normal kullanıcılar için ayrı erişim yetkileri
📱 Kullanıcı Arayüzü
Responsive Tasarım: Her cihazda mükemmel görünüm
TailwindCSS: Modern ve esnek UI bileşenleri
Dinamik Navigasyon: Kullanıcı rolüne göre özelleşen menü
🛡️ Güvenlik
Middleware Koruması: Yetkilendirme olmadan sayfalara erişimi engeller
Çevresel Yapılandırma: 12Factor uyumlu .env tabanlı konfigürasyon
Rol Kontrolü: URL yollarının kullanıcı rolüne göre kısıtlanması
🚀 Kurulum
⚙️ Yapılandırma
Auth0 hesabınızdan edindiğiniz bilgilerle .env dosyasını düzenleyin:

👤 Demo Kullanıcıları
Admin Hesabı
E-posta: admin@domain.com
Şifre: Admin123
Rol: Admin (Tüm özelliklere tam erişim)
Normal Kullanıcı
E-posta ile kayıt olabilir veya Auth0 social login ile giriş yapabilirsiniz
Rol: User (Dashboard erişimi)
📑 Proje Yapısı
📝 Rol Sistemi
Bu uygulama iki temel kullanıcı rolü destekler:

User: Standart kullanıcılar dashboard'a erişebilir
Admin: Yöneticiler dashboard ve admin paneline erişebilir
Rol atama işlemi JWT callback fonksiyonunda gerçekleştirilir:

🔧 Teknolojiler
Next.js 14+: React framework (App Router)
Auth0: OAuth kimlik doğrulama sağlayıcısı
NextAuth.js: Kimlik doğrulama kütüphanesi
JWT: JSON Web Token
TypeScript: Tip güvenliği
TailwindCSS: Utility-first CSS framework
🌐 12Factor Uyumluluğu
Bu proje modern bulut uygulamaları için belirlenen 12Factor prensiplerini takip eder:

Codebase: Tek bir Git reposunda versiyon kontrolü
Dependencies: NPM ile açık bağımlılık yönetimi
Config: Ortam değişkenleriyle yapılandırma
Build, release, run: Ayrılmış derleme ve çalıştırma aşamaları
Processes: Durumsuz işlemler
Dev/prod parity: Geliştirme ve üretim ortamları arasında benzerlik
🔐 Güvenlik Notları
.env dosyasını asla versiyon kontrol sistemine eklemeyin
Production ortamında güçlü bir NEXTAUTH_SECRET kullanın
Rol tabanlı erişim kontrollerini düzenli olarak test edin
📄 Lisans
MIT

👤 Geliştirici
Ferhat Erciyes - GitHub