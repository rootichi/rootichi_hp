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
        className="h-14 sm:h-18 md:h-24"
        style={{ objectFit: "contain", width: "auto" }}
      />
    </div>
  );
}

