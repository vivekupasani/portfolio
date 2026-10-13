import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <figure className="mt-8 overflow-hidden rounded-sm bg-[#f2f2f2]">
      <Image
        src="/me2.png"
        alt="Vivek Upasani outdoors"
        width={1474}
        height={1024}
        sizes="(max-width: 600px) 100vw, 560px"
        className="h-auto w-full object-cover"
      />
    </figure>
  );
}
