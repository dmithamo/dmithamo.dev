import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export type SidebarItemProps = {
  route: string;
  name: string;
  icon: string;
};
export default function SidebarItem({ route, name }: SidebarItemProps) {
  return (
    <>
      <StyledSidebarItem to={route}>{name}</StyledSidebarItem>
    </>
  );
}

const StyledSidebarItem = styled(NavLink)`
  text-decoration: none;
`;
