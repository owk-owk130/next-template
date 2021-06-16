import { BreakPoints, mq, SP_WIDTH } from "~/styles/mediaQuery";
import { css } from "@emotion/react";

export const spOnly = css`
  display: none;
  ${mq(BreakPoints.m)} {
    display: block;
  }
`;

export const pcOnly = css`
  display: block;
  ${mq(BreakPoints.m)} {
    display: none;
  }
`;

export const pxToVw = (value: number) => {
  return `${(value / SP_WIDTH) * 100}vw`;
};

export const TextStyle = (
  fontsize: number,
  lineheight: number,
  letterSpacing: number
) => css`
  font-size: ${fontsize}px;
  line-height: ${lineheight / fontsize};
  letter-spacing: ${letterSpacing / 1000}em;
  font-feature-settings: "palt";
  &::before {
    display: block;
    width: 0;
    height: 0;
    margin-top: calc((1 - ${lineheight / fontsize}) * 1em);
    content: "";
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    margin-bottom: calc((1 - ${lineheight / fontsize}) * 1em);
    content: "";
  }
`;

export const TextVwStyle = (
  fontsize: number,
  lineHeight: number,
  letterSpacing: number
) => css`
  font-size: ${pxToVw(fontsize)};
  line-height: ${pxToVw(lineHeight)};
  letter-spacing: ${letterSpacing / 1000}vw;
  font-feature-settings: "palt";
  &::before {
    display: block;
    width: 0;
    height: 0;
    margin-top: calc(${pxToVw((lineHeight - fontsize) / -2)});
    content: "";
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    margin-bottom: calc(${pxToVw((lineHeight - fontsize) / -2)});
    content: "";
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
