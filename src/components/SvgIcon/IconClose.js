import React from "react";
import { SvgXml } from "react-native-svg";
export default function IconCalendar() {
  const svgMarkup = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="white"/>
<path d="M18 18L30.7742 30.7742M18 30.7742L30.7742 18" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;

  return <SvgImage />;
}
