const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/vivekupasni" },
  { label: "X", href: "https://x.com/v1vekupasani" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vivekupasani" },
  { label: "GitHub", href: "https://github.com/vivekupasani" },
];

export default function SocialLinks() {
  return (
    <nav aria-label="Social links" className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
      {socialLinks.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-[#454545] underline decoration-[#c9c9c9] underline-offset-4 transition-colors hover:text-[#0066cc]"
        >
          {label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </nav>
  );
}
