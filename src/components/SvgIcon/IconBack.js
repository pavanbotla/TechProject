import React from "react";
import { SvgXml } from "react-native-svg";
export default function IconCalendar() {
  const svgMarkup = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white"/>
<g clip-path="url(#clip0_2_40)">
<path d="M21.828 23L26.778 27.95L25.364 29.364L19 23L25.364 16.636L26.778 18.05L21.828 23Z" fill="#ff0000"/>
</g>
<defs>
<clipPath id="clip0_2_40">
<rect width="24" height="24" fill="white" transform="translate(11 11)"/>
</clipPath>
</defs>
</svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;

  return <SvgImage />;
}
