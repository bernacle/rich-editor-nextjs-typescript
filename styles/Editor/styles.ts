import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Content = styled.div`
  padding: 40px 20px;
  background-color: #fff;

  button {
    background-color: #8AB8FE;
    color: #fff;
    border: 2px solid #665FD1;
    padding: 5px  15px;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: 0.3s;
    font-size: 16px;
    & + button {
        margin-left: 15px;
      }

    &:hover {
    background-color: #FFFF7E;
    color: #000;
  }
  }
`