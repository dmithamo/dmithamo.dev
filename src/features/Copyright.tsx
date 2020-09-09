import React from 'react';
import styled from 'styled-components';
import colors from '../assets/colors';

export default function Copyright() {
  return (
    <StyledCopyright>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/dmithamo"
        style={{ color: 'black' }}
      >
        &copy;2020&nbsp; dmithamo
      </a>
    </StyledCopyright>
  );
}

const StyledCopyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0.75em;
  opacity: 0.4;
  background-color: ${colors.grey};
  border-radius: 15px;
  margin: auto;
  position: fixed;
  width: fit-content;
  bottom: 0.5em;
  right: 0.5em;
  z-index: 1000;
  a {
    color: black;
    text-decoration: none;
  }
  :hover {
    opacity: 1;
  }
`;
