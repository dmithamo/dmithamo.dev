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
    <StyledSidebarItem exact activeClassName="active" to={path}>
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </StyledSidebarItem>
  );
}

const StyledSidebarItem = styled(NavLink)`
  text-decoration: none;
  color: ${colors.black};
  padding: 0.3em 0;
  display: flex;
  justify-content: flex-start;
  padding: 0.5em 0;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1em;
  svg {
    margin-right: 0.3em;
    font-size: 1.3em;
    color: ${colors.lightBlack};
  }
  span {
    flex-grow: 1;
  }
  :hover {
    border-bottom: 2px solid ${colors.darkGrey};
    background-color: ${colors.grey};
    opacity: 1;
    svg {
      color: ${colors.black};
    }
  }
`;
