export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          お問い合わせ
        </h2>
        <p className="text-slate-600 mb-8">
          プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください。
        </p>
        <div className="bg-blue-50 rounded-xl p-6 sm:p-8 border border-blue-100">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                メールアドレス
              </h3>
              <a
                href="mailto:rootichi.jp@gmail.com"
                className="text-blue-600 hover:text-blue-700 text-lg font-medium"
              >
                rootichi.jp@gmail.com
              </a>
            </div>
            <div className="pt-4 border-t border-blue-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                その他のリンク
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/rootichi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://vercel.com/rootichi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Vercel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

