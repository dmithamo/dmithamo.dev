/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/Sidebar';

export type WithSidebarProps = {
  children: JSX.Element[] | JSX.Element;
};

export default function WithSidebar({
  children,
}: WithSidebarProps): JSX.Element {
  return (
    <StyledWithSidebar>
      <Sidebar />
      <section>{children}</section>
    </StyledWithSidebar>
  );
}

const StyledWithSidebar = styled.div`
  display: flex;

  nav {
    width: 50px;
  }
  section {
    flex-grow: 1;
  }
`;
