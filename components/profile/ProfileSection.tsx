import type { ReactNode } from "react";

interface ProfileSectionProps {
  children: ReactNode;
  title: string;
}

export default function ProfileSection({
  children,
  title,
}: ProfileSectionProps) {
  return (
    <section className="mt-8" aria-label={title}>
      <h2 className="mb-3 text-[13px] font-semibold text-[#202020]">{title}</h2>
      {children}
    </section>
  );
}
