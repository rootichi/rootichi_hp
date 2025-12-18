export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold text-white">rootichi</span>
          </div>
          <div className="text-slate-400 text-sm">
            <p>&copy; 2025 rootichi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

