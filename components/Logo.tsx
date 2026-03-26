export default function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-label="Reverb logo"
    >
      <circle cx="20" cy="20" r="19.5" stroke="currentColor" strokeOpacity="0.14" />
      {/* Reverb wave arcs */}
      <path
        d="M8 20 C8 20 12 10 20 10 C28 10 32 20 32 20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.22"
        fill="none"
      />
      <path
        d="M11.5 20 C11.5 20 14.5 13 20 13 C25.5 13 28.5 20 28.5 20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.4"
        fill="none"
      />
      <path
        d="M15 20 C15 20 16.8 16.5 20 16.5 C23.2 16.5 25 20 25 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.7"
        fill="none"
      />
      <circle cx="20" cy="20" r="2" fill="currentColor" fillOpacity="0.85" />
    </svg>
  );
}
