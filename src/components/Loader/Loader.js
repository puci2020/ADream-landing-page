import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 1;
  background: none;
`;

const Spinner = styled.div`
  width: 6rem;
  height: 6rem;
  display: inline-block;
  border: 6px solid rgba(147, 137, 229, 0.3);
  border-radius: 50%;
  border-top-color: rgba(147, 137, 229, 1);
  animation: 0.8s spin infinite ease-in-out;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {

  return (
    <Wrapper>
        <Spinner />
    </Wrapper>
  );
}
