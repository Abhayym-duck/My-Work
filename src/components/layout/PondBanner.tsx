function LilyPad({
  cx,
  cy,
  r,
  rotate = 0,
  accent,
}: {
  cx: number;
  cy: number;
  r: number;
  rotate?: number;
  accent?: "flower" | "dot" | "none";
}) {
  const mouth = r * 0.98;
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate})`}>
      <g className="[animation:sway-pad_7s_ease-in-out_infinite]">
        <path
          d={`M0,0 L${mouth},0 A${r},${r} 0 1 1 ${mouth * 0.5},${-mouth * 0.87} Z`}
          fill="#2f6f52"
          stroke="#1e4d38"
          strokeWidth={1.5}
        />
        <path
          d={`M0,0 L${r * 0.75},0 M0,0 L${r * -0.3},${r * 0.7} M0,0 L${r * -0.65},${r * -0.35}`}
          stroke="#1e4d38"
          strokeWidth={1}
          opacity={0.6}
        />
        {accent === "dot" && (
          <circle cx={-r * 0.35} cy={r * 0.1} r={2.5} fill="#fff" opacity={0.9} />
        )}
        {accent === "flower" && (
          <g transform={`translate(${-r * 0.55} ${-r * 0.75})`}>
            {[0, 72, 144, 216, 288].map((a) => (
              <ellipse
                key={a}
                cx={0}
                cy={-7}
                rx={4}
                ry={6}
                fill="#fdfaf4"
                transform={`rotate(${a})`}
              />
            ))}
            <circle r={3.5} fill="#c8503a" />
          </g>
        )}
      </g>
    </g>
  );
}

function KoiFish({
  x,
  y,
  scale = 1,
  flip = false,
  color = "#d9502f",
  spot = "#b23a20",
  animation,
}: {
  x: number;
  y: number;
  scale?: number;
  flip?: boolean;
  color?: string;
  spot?: string;
  animation: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale * (flip ? -1 : 1)} ${scale})`}>
      <g className={animation}>
        <path
          d="M0,0 L-16,-11 L-11,0 L-16,11 Z"
          fill={color}
          opacity={0.9}
        />
        <path
          d="M0,-13 C22,-16 46,-16 58,0 C46,16 22,16 0,13 C-6,8 -6,-8 0,-13 Z"
          fill={color}
        />
        <ellipse cx={20} cy={-4} rx={7} ry={4} fill={spot} opacity={0.85} />
        <ellipse cx={38} cy={5} rx={6} ry={3.5} fill={spot} opacity={0.7} />
        <circle cx={51} cy={-2} r={1.6} fill="#2a1a12" />
      </g>
    </g>
  );
}

function Cloud({ cx, cy, rx, ry, delay = 0 }: { cx: number; cy: number; rx: number; ry: number; delay?: number }) {
  return (
    <ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      fill="#eaf3ee"
      opacity={0.16}
      className="[animation:drift-cloud_14s_ease-in-out_infinite]"
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

/** Decorative koi pond illustration for the footer. Purely ambient — no interactive content. */
export function PondBanner() {
  return (
    <div className="w-full overflow-hidden rounded-2xl" aria-hidden>
      <svg
        viewBox="0 0 1200 260"
        className="block h-auto w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pond-base" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#12352c" />
            <stop offset="55%" stopColor="#1e5344" />
            <stop offset="100%" stopColor="#12352c" />
          </linearGradient>
          <radialGradient id="pond-glow" cx="62%" cy="46%" r="55%">
            <stop offset="0%" stopColor="#eef7f1" stopOpacity={0.55} />
            <stop offset="45%" stopColor="#cfe8dc" stopOpacity={0.18} />
            <stop offset="100%" stopColor="#cfe8dc" stopOpacity={0} />
          </radialGradient>
        </defs>

        <rect width="1200" height="260" fill="url(#pond-base)" />
        <rect width="1200" height="260" fill="url(#pond-glow)" style={{ mixBlendMode: "screen" }} />

        <Cloud cx={110} cy={190} rx={70} ry={16} delay={0} />
        <Cloud cx={330} cy={70} rx={90} ry={18} delay={1.2} />
        <Cloud cx={230} cy={135} rx={55} ry={13} delay={2.4} />
        <Cloud cx={620} cy={45} rx={110} ry={20} delay={0.6} />
        <Cloud cx={780} cy={130} rx={70} ry={15} delay={1.8} />
        <Cloud cx={1000} cy={200} rx={90} ry={16} delay={0.9} />
        <Cloud cx={1140} cy={95} rx={65} ry={14} delay={2.1} />

        <LilyPad cx={228} cy={128} r={28} rotate={200} accent="flower" />
        <LilyPad cx={548} cy={62} r={38} rotate={20} accent="dot" />
        <LilyPad cx={912} cy={98} r={34} rotate={-30} accent="none" />
        <LilyPad cx={972} cy={168} r={17} rotate={140} accent="none" />

        <KoiFish
          x={118}
          y={26}
          scale={0.55}
          flip
          animation="[animation:swim-a_10s_ease-in-out_infinite]"
        />
        <KoiFish
          x={502}
          y={128}
          scale={0.85}
          animation="[animation:swim-b_12s_ease-in-out_infinite]"
        />
        <KoiFish
          x={520}
          y={196}
          scale={0.55}
          flip
          animation="[animation:swim-c_9s_ease-in-out_infinite]"
        />
        <KoiFish
          x={840}
          y={158}
          scale={0.7}
          animation="[animation:swim-d_11s_ease-in-out_infinite]"
        />
        <KoiFish
          x={252}
          y={244}
          scale={0.45}
          flip
          animation="[animation:swim-a_13s_ease-in-out_infinite]"
        />
        <KoiFish
          x={1030}
          y={44}
          scale={0.5}
          animation="[animation:swim-c_10.5s_ease-in-out_infinite]"
        />
        <KoiFish
          x={1080}
          y={238}
          scale={0.45}
          flip
          animation="[animation:swim-b_9.5s_ease-in-out_infinite]"
        />
      </svg>
    </div>
  );
}
