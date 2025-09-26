export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 150 L75 80 L100 150 M62 125 L88 125"
        stroke="#ffffff"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M130 95 Q120 85 110 95 Q100 105 110 115 Q120 125 130 115 Q140 105 130 125 Q120 135 110 145 Q120 155 130 145"
        stroke="#ffffff"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
