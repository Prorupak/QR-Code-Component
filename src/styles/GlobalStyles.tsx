import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --white: hsl(0, 0%, 100%);
    --light-gray: hsl(212, 45%, 89%);
    --grayish-blue: hsl(220, 15%, 55%);
    --dark-blue: hsl(218, 44%, 22%);
    --blue: #2C7DFA;
}

body {
    background-color: var(--light-gray);
    font-family: 'Outfit', sans-serif;
      overflow: hidden;
}

h1 {
font-weight: 700;
font-size: 21px;
line-height: 26px;
color: var(--dark-blue);
}

p {
font-weight: 400;
font-size: 15px;
line-height: 19px;
text-align: center;
color: var(--grayish-blue);
}

`;
