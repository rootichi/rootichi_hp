export default function Process() {
  const steps = [
    {
      number: "01",
      title: "本質を掘り下げる",
      description: "対話を通じて、ビジネスの根底にある真の課題を見つけ出します。",
    },
    {
      number: "02",
      title: "価値を研ぎ澄ます",
      description: "「Level 1」として必要な要素を厳選し、最小限で最大の効果を生む設計を行います。",
    },
    {
      number: "03",
      title: "最初の一歩を創る",
      description: "妥協のない美しさと機能性を両立させ、迅速にプロダクトを具現化します。",
    },
    {
      number: "04",
      title: "共に未来を育てる",
      description: "リリースを起点として、市場の変化に合わせた継続的なアップデートを支援します。",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-16 text-center">
          プロセス
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#87CEEB]">
                  STEP {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

