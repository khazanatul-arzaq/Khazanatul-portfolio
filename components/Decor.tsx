
const Leaf = ({
  color,
  className,
}: {
  color: string;
  className?: string;
}) => (
  <svg
    viewBox="0 0 100 160"
    className={className}
    aria-hidden="true"
    fill="none"
  >
    <path
      d="M50 158C50 158 6 112 12 62 17 28 50 4 50 4s33 24 38 58c6 50-38 96-38 96Z"
      fill={color}
      opacity=".35"
    />
    <path
      d="M50 150V30M50 70 30 50M50 95 72 72M50 120 30 100"
      stroke="#318192"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity=".65"
    />
  </svg>
);

const Flower = ({
  color = "#F17585",
  className,
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    aria-hidden="true"
  >
    {[0, 60, 120, 180, 240, 300].map((angle) => (
      <ellipse
        key={angle}
        cx="50"
        cy="25"
        rx="9"
        ry="17"
        fill={color}
        opacity=".7"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="9" fill="#E7B94F" />
  </svg>
);

export default function Decor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Soft background atmosphere */}
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#318192]/10 blur-3xl" />

      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#6BC658]/15 blur-3xl" />

      <div className="absolute right-[20%] top-[45%] h-56 w-56 rounded-full bg-[#F17585]/10 blur-3xl" />

      {/* Botanical accents */}
      <Leaf
        color="#6BC658"
        className="sway absolute bottom-0 left-[3%] hidden h-44 w-auto sm:block"
      />

      <Leaf
        color="#318192"
        className="sway absolute right-[3%] top-16 hidden h-32 w-auto rotate-12 sm:block"
      />

      {/* Small floral details */}
      <Flower
        color="#F17585"
        className="float absolute left-[13%] top-28 h-7 w-7 opacity-70"
      />

      <Flower
        color="#AE0947"
        className="float absolute right-[14%] top-36 h-6 w-6 opacity-60"
      />

      {/* Small decorative dots */}
      <div className="absolute left-[28%] top-[22%] h-2 w-2 rounded-full bg-[#6BC658]/50" />
      <div className="absolute right-[30%] top-[65%] h-2 w-2 rounded-full bg-[#F17585]/50" />
      <div className="absolute bottom-[20%] left-[45%] h-1.5 w-1.5 rounded-full bg-[#318192]/50" />
    </div>
  );
}
