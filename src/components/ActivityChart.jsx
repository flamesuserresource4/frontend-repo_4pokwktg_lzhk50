function ActivityChart() {
  const values = [120, 150, 130, 180, 220, 200, 240];
  const max = Math.max(...values) * 1.1;
  const min = 0;
  const width = 500;
  const height = 140;
  const padding = 12;
  const stepX = (width - padding * 2) / (values.length - 1);

  const points = values
    .map((v, i) => {
      const x = padding + i * stepX;
      const y = padding + (1 - (v - min) / (max - min)) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(' ');

  // Build area under the line for a subtle fill
  const areaPoints = `${points} ${padding + (values.length - 1) * stepX},${height - padding} ${padding},${height - padding}`;

  return (
    <div className="h-56 w-full rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="mb-2 text-sm font-semibold text-neutral-900">Weekly Activity</div>
      <div className="h-44 w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
          <defs>
            <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#111827" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#111827" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g>
            {/* Y grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((t) => {
              const y = padding + t * (height - padding * 2);
              return (
                <line
                  key={t}
                  x1={padding}
                  x2={width - padding}
                  y1={y}
                  y2={y}
                  className="stroke-neutral-200"
                  strokeWidth="1"
                />
              );
            })}

            {/* Area fill */}
            <polyline points={areaPoints} fill="url(#lineFill)" stroke="none" />

            {/* Trend line */}
            <polyline
              points={points}
              fill="none"
              stroke="#111827"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* End point dot */}
            {(() => {
              const last = values.length - 1;
              const x = padding + last * stepX;
              const y = padding + (1 - (values[last] - min) / (max - min)) * (height - padding * 2);
              return (
                <g>
                  <circle cx={x} cy={y} r="4" className="fill-white stroke-neutral-900" strokeWidth="2" />
                </g>
              );
            })()}
          </g>
        </svg>
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}

export default ActivityChart;
