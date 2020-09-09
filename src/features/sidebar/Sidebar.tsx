import React from 'react';
import styled from 'styled-components';

export default function Sidebar() {
  return <StyledSidebar>Sidebar here</StyledSidebar>;
}

const StyledSidebar = styled.nav`
  height: 100vh;
  border: 1px solid red;
  padding: 0 0.2em;
`;
