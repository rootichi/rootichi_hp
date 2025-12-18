export default function Services() {
  const services = [
    {
      title: "SaaS開発",
      description: "お客様のビジネスに最適なSaaSアプリケーションを開発します。スケーラブルで保守性の高いシステムを構築。",
      icon: "🚀",
    },
    {
      title: "Webアプリケーション",
      description: "モダンな技術スタックを使用した、高速で使いやすいWebアプリケーションを提供します。",
      icon: "💻",
    },
    {
      title: "コンサルティング",
      description: "技術選定からアーキテクチャ設計まで、プロジェクトの成功をサポートします。",
      icon: "📊",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-4">
          サービス
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          お客様のビジネス成長をサポートする、包括的な開発サービスを提供しています。
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

