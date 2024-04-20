import React from "react";
import { SvgXml } from "react-native-svg";
export default function IconClock() {
  const svgMarkup = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_114)">
<path d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 9.99999C18.3334 5.39762 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39762 1.66669 9.99999C1.66669 14.6024 5.39765 18.3333 10 18.3333Z" stroke="#ff0000" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 5V10L13.3333 11.6667" stroke="#ff0000" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2_114">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;

  return <SvgImage />;
}
