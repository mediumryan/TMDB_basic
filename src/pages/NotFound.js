import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const boomboom = keyframes`
  to {
    transform: scale(1.15);
  }
`;

const NFContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: calc(var(--margin-large) * 4);
    font-size: var(--font-size-small);
    color: var(--bg-200);
  }
  h1 {
    font-size: calc(var(--font-size-large) * 2);
    color: var(--primary-100);
    margin-top: var(--margin-medium);
    animation: ${boomboom} 3s infinite linear;
  }
`;

const NFGoHome = styled.button`
  background-color: var(--bg-200);
  color: var(--text-200);
  font-size: var(--font-size-medium-large);
  padding: var(--padding-medium) var(--padding-medium-large);
  margin-top: var(--margin-medium);
  border-radius: 10px;
  transition: var(--animation-duration) all;
  &:hover {
    transform: scale(1.05);
    color: var(--primary-100);
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NFContainer>
      <p>Page Not Found!</p>
      <h1>404</h1>
      <NFGoHome
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </NFGoHome>
    </NFContainer>
  );
};

export default NotFound;
