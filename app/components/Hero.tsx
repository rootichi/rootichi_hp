export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          SaaS開発で
          <br />
          <span className="text-blue-600">ビジネスを成長</span>させます
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          rootichiは、お客様のビジネス課題を解決するSaaS開発を提供します。
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          シンプルで使いやすいソリューションで、あなたの事業を次のステージへ。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            お問い合わせ
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg text-base sm:text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
          >
            サービスを見る
          </a>
        </div>
      </div>
    </section>
  );
}

