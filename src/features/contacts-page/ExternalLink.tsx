/* eslint-disable no-undef */
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';

export type ExternalLinkProps = {
  link: {
    url: string;
    username: string;
  };
  icon: IconProp;
};

export default function ExternalLink({
  link: { url, username },
  icon,
}: ExternalLinkProps): JSX.Element {
  return (
    <StyledExternalLink>
      <a target="blank" rel="noreferrer noopener" href={url}>
        <FontAwesomeIcon icon={icon} />
        <div className="textual">
          <p className="domain">
            &lt;a href=&quot;
            {url}
            &quot;&gt;
          </p>
          <p className="username">{username}</p>
          <p className="domain">&lt;/a&gt;</p>
        </div>
      </a>
    </StyledExternalLink>
  );
}

const StyledExternalLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px dashed ${colors.veryLightBlack};
  font-weight: 700;

  a {
    color: ${colors.black};
    text-decoration: none;
    padding: 0.1em;
  }
  a {
    svg {
      font-size: 1.3em;
      width: 1%;
    }

    p.domain {
      opacity: 0.3;
      font-size: 0.8em;
      color: ${colors.lightBlack};
    }
  }
`;
