export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
          始まりの相談を。
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          あなたのアイデアを「一」にするお手伝いをさせてください。
        </p>
        <a
          href="https://docs.google.com/forms/d/15GlMvEmiKCG8YBBVTRZP_q2wpASbyjmYJutUmeTaM-4/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-[#87CEEB] text-white rounded-lg text-base font-semibold hover:bg-[#6bb8d4] transition-colors shadow-sm hover:shadow-md"
        >
          お問い合わせ
        </a>
      </div>
    </section>
  );
}
