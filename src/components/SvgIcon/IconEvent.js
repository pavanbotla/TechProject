import React from "react";
import { SvgXml } from "react-native-svg";
export default function IconEvent() {
  const svgMarkup = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#E7E2F3"/>
<g clip-path="url(#clip0_2_97)">
<path d="M29 15H33C33.2652 15 33.5196 15.1054 33.7071 15.2929C33.8946 15.4804 34 15.7348 34 16V32C34 32.2652 33.8946 32.5196 33.7071 32.7071C33.5196 32.8946 33.2652 33 33 33H15C14.7348 33 14.4804 32.8946 14.2929 32.7071C14.1054 32.5196 14 32.2652 14 32V16C14 15.7348 14.1054 15.4804 14.2929 15.2929C14.4804 15.1054 14.7348 15 15 15H19V13H21V15H27V13H29V15ZM16 21V31H32V21H16ZM18 25H23V29H18V25Z" fill="#ff0000"/>
</g>
<defs>
<clipPath id="clip0_2_97">
<rect width="24" height="24" fill="white" transform="translate(12 12)"/>
</clipPath>
</defs>
</svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;

  return <SvgImage />;
}
