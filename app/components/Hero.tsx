export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
          根を張り
          <br />
          一を刻む
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          あなたのアイデアを、形にする。
          <br />
          SaaS・アプリ・HP制作のプロ。
        </p>
        <a
          href="https://docs.google.com/forms/d/15GlMvEmiKCG8YBBVTRZP_q2wpASbyjmYJutUmeTaM-4/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-[#87CEEB] text-white rounded-lg text-base font-semibold hover:bg-[#6bb8d4] transition-colors shadow-sm hover:shadow-md"
        >
          プロダクトを相談する
        </a>
      </div>
    </section>
  );
}
