import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --color-brand-10: #14213D;
        --color-brand-11: #14233D;
        --color-brand-20: #1ABC9C;
        --color-brand-30: #98FF98; 
        --color-brand-40: #7DFD7D;
        --color-brand-50: #55D555;
        --color-brand-60: #587E77;
        --color-brand-61: #709d92;
        --color-brand-70: #FFDAB9;
        --color-brand-80: #F4D03F;
        --color-brand-90: #E0BC2B;

        --color-red-10: #FF7875;
        --color-red-20: #FF4D4F;
        
        
        --color-grey-00: #FFFFFF;
        --color-grey-10: #FDFDFD;
        --color-grey-20: #D1D5DB;
        --color-grey-30: #313841;
        --color-grey-40: #272C33;
        --color-grey-50: #20252B;
        --color-grey-60: rgba(20, 33, 61, 0.6);
        --color-grey-70: #20252ba1;
        


        --border-radius-tiny: 5px;
        --border-radius-sm: 7px;
        --border-radius-md: 10px;
        --border-radius-lg: 13px;

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        overflow-x: hidden;

        transition: background-color 0.2s;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--color-brand-60);
        border-radius: var(--border-radius-lg)
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Source Code Pro", sans-serif;
        color: var(--color-grey-700);

        transition: color 0.3s, background-color 0.3s;
        min-height: 100vh;
        line-height: 1.5;
        font-size: 1.6rem;

        width: 100%;
        height: 100%;



    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
