/** Герб питомника: щит, корона и снежный мотив. */
export function Crest({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={(size * 46) / 40} viewBox="0 0 40 46" fill="none" aria-hidden="true">
      <path d="M20 3l4 3 4-3v5H12V3l4 3 4-3z" fill="#E3C766" />
      <path
        d="M4 10h32v18c0 9-8 14-16 17C12 42 4 37 4 28V10z"
        stroke="#E3C766"
        strokeWidth="1.6"
        fill="#1A2939"
      />
      <path d="M20 17c3 0 5 2 5 5 0 4-3 6-5 8-2-2-5-4-5-8 0-3 2-5 5-5z" fill="#E3C766" opacity=".9" />
    </svg>
  );
}
