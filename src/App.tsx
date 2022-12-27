import React from "react";
import QR from "./assets/image-qr-code.png";
import * as Style from "./App.styles";

function App() {
  return (
    <Style.Section>
      <Style.MainWrapper>
        <Style.Wrapper>
          <Style.Image alt="QR Code" src={QR} height="288px" width="288px" />
          <Style.Contents>
            <Style.Title>
              Improve your front-end skills by building projects
            </Style.Title>
            <Style.Description>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Style.Description>
          </Style.Contents>
        </Style.Wrapper>
      </Style.MainWrapper>
      <Style.Attributes>
        Challenge by{" "}
        <Style.Mentor
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Style.Mentor>
        . Coded by{" "}
        <Style.User
          href="https://www.github.com/RupakSapkota123"
          target="_blank"
        >
          Rupak Sapkota
        </Style.User>
        .
      </Style.Attributes>
    </Style.Section>
  );
}

export default App;
