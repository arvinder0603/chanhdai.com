export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="100"
      height="50"
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>
          {`.letter { font-family: 'Helvetica', 'Arial', sans-serif; font-weight: 600; font-size: 32px; }`}
        </style>
      </defs>

      {/* Letter A */}
      <text x="10" y="35" className="letter" fill="currentColor">
        A
      </text>

      {/* Letter S */}
      <text x="40" y="35" className="letter" fill="currentColor">
        S
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .letter { font-family: 'Helvetica', 'Arial', sans-serif; font-weight: 600; font-size: 32px; }
      </style>
    </defs>
    <text x="10" y="35" class="letter" fill="${color}">A</text>
    <text x="40" y="35" class="letter" fill="${color}">S</text>
  </svg>`;
}
