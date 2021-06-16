export const SP_WIDTH = 768;

export const BreakPoints = <const>{
  s: 480,
  m: 768,
  l: 980,
  xl: 1200,
};

export type BreakPoints = typeof BreakPoints[keyof typeof BreakPoints];

export const mq = (bp: BreakPoints) => {
  return `@media (max-width: ${bp}px)`;
};
