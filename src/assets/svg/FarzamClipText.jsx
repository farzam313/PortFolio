const FarzamClipText = ({ className = "", width = 400, height = 100 }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="farzam-clip">
          <text
            x="10"
            y="60"
            fontFamily="monospace"
            fontSize="48"
            fontWeight="bold"
          >
            {"<Farzam />"}
          </text>
        </clipPath>

        <linearGradient id="farzam-gradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#00f" />
          <stop offset="100%" stopColor="#0ff" />
        </linearGradient>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#farzam-gradient)"
        clipPath="url(#farzam-clip)"
      />

      {/* Optional stroke for visual effect */}
      <text
        x="10"
        y="60"
        fontFamily="monospace"
        fontSize="48"
        fontWeight="bold"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
      >
        {"<Farzam />"}
      </text>
    </svg>
  );
};

export default FarzamClipText;
