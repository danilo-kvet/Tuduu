import styled from "styled-components";

export const ToDoPageContainer = styled.div`
  margin: 50px 10px 0 10px;

  @media (min-width: 768px) {
    margin: 86px auto 0 auto;
    width: 70vw;
    max-width: 1350px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  p {
    margin-right: 16px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
