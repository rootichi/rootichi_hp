export default function Services() {
  const services = [
    {
      number: "01",
      title: "SaaS開発",
      description: "ビジネスの核となるプラットフォームを構築します。拡張性を担保したクリーンな設計で、成長に耐えうるシステムを提供します。",
    },
    {
      number: "02",
      title: "アプリ開発",
      description: "ユーザーの体験を第一に考えたアプリ開発。直感的な操作性と、長く愛される美しさを両立させます。",
    },
    {
      number: "03",
      title: "HP制作",
      description: "ブランドの思想を可視化するHP制作。単なる名刺代わりのHPではなく、ストーリーが伝わるデジタル空間を創り上げます。",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-16 text-center">
          サービス
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <div className="text-5xl font-bold text-[#87CEEB]">
                {service.number}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
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
