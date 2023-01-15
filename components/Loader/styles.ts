import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgb(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #0072e5;

  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
