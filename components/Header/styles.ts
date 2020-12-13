import styled from "styled-components";

export const Container = styled.div`
  color: #FFFF7E;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  nav {
    position: relative;

    a {
      color: #FFFF7E;
      text-decoration: none;
      font-size: 18px;
      font-weight: bold;
      position: relative;

      top: calc(20% - 10px);
      transition: opacity 0.3s;
      &:hover {
        opacity: 0.6;
      }

      & + a {
        margin-left: 30px;
      }
      
      

      &::after {
        margin-top: 2px;
        position: absolute;
        content: "";
        height: 0.05em;
        top: 100%;
        background: currentColor;
        z-index: -1;
        left: 0;
        right: 0;
        transform: scaleX(0);
        transition: transform 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035);
      }

      &:hover::after {
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        transform: scaleX(1);
      }
    }
  }
`;
