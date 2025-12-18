export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
          根を張り、一を刻む。
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          最小単位の価値（Level 1）を、最大の信頼で形にする。
          <br />
          SaaS・アプリケーション・Webサイト制作のプロフェッショナル集団。
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-[#87CEEB] text-white rounded-lg text-base font-semibold hover:bg-[#6bb8d4] transition-colors shadow-sm hover:shadow-md"
        >
          プロジェクトを相談する
        </a>
      </div>
    </section>
  );
}
