import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainWrapper = styled.div`
  width: 320px;
  height: 495px;
  background: var(--white);
  border-radius: 20px;
  box-shadow: 0px 4px 20px 8px rgba(0, 0, 0, 0.08);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 16px;
`;

export const Contents = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 30px 5px 0 5px;
`;

export const Description = styled.p`
  margin-top: 0;
  margin: 20px 5px 0 5px;
`;

export const Image = styled.img`
  border-radius: 10px;
`;

export const Attributes = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;

export const Mentor = styled.a`
  color: var(--blue);
`;

export const User = styled.a`
  color: var(--blue);
`;
