import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="rootichi logo"
        width={400}
        height={400}
        quality={100}
        priority
        className="h-14 sm:h-18 md:h-24 w-auto"
      />
    </div>
  );
}

