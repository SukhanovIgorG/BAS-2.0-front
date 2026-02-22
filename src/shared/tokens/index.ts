const bgPatterns = {
  primary: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23f5e6b7ff'/><path d='M3.25 10h13.5M10 3.25v13.5' transform='translate(5,0)' stroke-linejoin='round' stroke-linecap='round' stroke-width='0.5' stroke='%232d229141' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-4,0)' fill='url(%23a)'/></svg>")`,
  secondary: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%231a1a1aff'/><path d='M3.25 10h13.5M10 3.25v13.5' transform='translate(5,0)' stroke-linejoin='round' stroke-linecap='round' stroke-width='0.5' stroke='%232e2291ff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-4,0)' fill='url(%23a)'/></svg>")`,
};

// border: 3px solid #252424;
// box-shadow: 4px 4px 0 0 #221b19;

const shadows = {
  primary: '4px 4px 0 0 #221b19',
};

const spacing = {
  1: 2,
  2: 4,
  3: 8,
  4: 16,
  5: 24,
  6: 32,
  7: 40,
  8: 48,
  9: 56,
  10: 64,
};

export const TOKENS = {
  bg: {
    bgPatterns,
  },
  spacing,
  shadows,
};
