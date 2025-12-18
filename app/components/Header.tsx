import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#vision"
              className="text-slate-700 hover:text-[#87CEEB] transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-slate-700 hover:text-[#87CEEB] transition-colors text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-[#87CEEB] transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <a
              href="#contact"
              className="text-slate-700 hover:text-[#87CEEB] transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
