import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';
import { breakpoints } from '../../common/constants';
import Copyright from '../Copyright';
import allTheRoutes from '../routes/allTheRoutes';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  return (
    <StyledSidebar>
      {allTheRoutes.map((r) => (
        <SidebarItem key={r.path} path={r.path} name={r.name} icon={r.icon} />
      ))}

      <Copyright />
    </StyledSidebar>
  );
}

const StyledSidebar = styled.nav`
  height: 100vh;
  background-color: ${colors.grey};
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  a.active {
    background-color: ${colors.darkGey};
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 50px;
  }
`;
