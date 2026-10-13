export default function ProfileHeader() {
  return (
    <header className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-[21px] font-semibold tracking-[-0.04em] text-[#171717]">
          Vivek Upasani
        </h1>
        <p className="mt-0.5 text-[12px] text-[#858585]">
          Product-focused software developer
        </p>
      </div>
      <span className="shrink-0 pt-1 text-[11px] text-[#858585]">
        India · 2026
      </span>
    </header>
  );
}
