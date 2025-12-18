import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.svg"
        alt="rootichi logo"
        width={1024}
        height={1024}
        priority
        className="w-auto h-12 sm:h-16 md:h-20"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

