import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-roboto: Roboto;

/* font sizes */
--font-size-3xs: 10px;
--font-size-xl: 20px;
--font-size-base: 16px;
--font-size-xs: 12px;
--font-size-lg: 18px;
--font-size-sm: 14px;

/* Colors */
--color-white: #fff;
--color-black: #000;
--color-gray-100: rgba(0, 0, 0, 0.5);
--color-gray-200: rgba(0, 0, 0, 0.05);
--color-gray-300: rgba(0, 0, 0, 0.1);

/* Gaps */
--gap-xs: 12px;
--gap-5xs: 8px;
--gap-9xs: 4px;
--gap-11xs: 2px;

/* Paddings */
--padding-9xs: 4px;
--padding-xs: 12px;
--padding-5xs: 8px;
--padding-base: 16px;
--padding-10xs: 3px;

/* border radiuses */
--br-7xs: 6px;
--br-9xs: 4px;
--br-5xl: 24px;

}
`;
