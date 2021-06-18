import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 100px;
  background-color: #ebd50d;
  height: 30px;
  color: #1860cd;
  text-align: center;
  line-height: 30px;
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 1.5rem;
  z-index: 1000;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 150px;
    height: 50px;
    line-height: 50px;
    font-size: 2rem;
  }
`;
