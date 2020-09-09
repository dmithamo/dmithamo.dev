import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../assets/colors';

export type SidebarItemProps = {
  path: string;
  name: string;
  icon: any;
};
export default function SidebarItem({ path, name, icon }: SidebarItemProps) {
  return (
    <StyledSidebarItem activeClassName="active" to={path}>
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </StyledSidebarItem>
  );
}

const StyledSidebarItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5em 0;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1em;
  svg {
    margin-right: 1em;
    padding: 0.4em;
  }
  span {
    flex-grow: 1;
  }
  :hover {
    background-color: ${colors.darkGey};
  }
`;
