import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              サービス
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              事業について
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              お問い合わせ
            </a>
          </div>
          <div className="md:hidden">
            <a
              href="#contact"
              className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              お問い合わせ
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

