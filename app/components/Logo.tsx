import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.svg"
        alt="rootichi logo"
        width={40}
        height={40}
        priority
      />
      <span className="text-xl font-semibold text-slate-800">rootichi</span>
    </div>
  );
}

