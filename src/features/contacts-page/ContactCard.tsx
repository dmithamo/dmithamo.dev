import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';
import contactInfo from './contactInfo';

export default function ContactCard(): JSX.Element {
  return (
    <StyledContactCard>
      <div className="card card-front">
        <p className="name">{contactInfo.name}</p>
        <p className="subscript">Software Engineer</p>
      </div>
      <div className="card card-back">
        <a href="mailto:dennisbmithamo@gmail.com" className="contact-link">
          <FontAwesomeIcon icon="envelope-open" />
          <p className="domain">&lt;a href=&quot;mailto:&quot;&gt;</p>
          <p className="username">{contactInfo.emailAddress}</p>
          <p className="domain">&lt;/a&gt;</p>
        </a>

        <a
          href={[contactInfo.github.url, contactInfo.github.username].join('')}
          className="contact-link"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
          <p className="domain">
            &lt;a href=&quot;
            {contactInfo.github.url}
            &quot;&gt;
          </p>
          <p className="username">{contactInfo.github.username}</p>
          <p className="domain">&lt;/a&gt;</p>
        </a>

        <a
          href={[contactInfo.linkedIn.url, contactInfo.linkedIn.username].join(
            '',
          )}
          className="contact-link"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          <p className="domain">
            &lt;a href=&quot;
            {contactInfo.linkedIn.url}
            &quot;&gt;
          </p>
          <p className="username">{contactInfo.linkedIn.username}</p>
          <p className="domain">&lt;/a&gt;</p>
        </a>
      </div>
    </StyledContactCard>
  );
}

const StyledContactCard = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  div.card {
    box-shadow: 1px 2px 5px 1px ${colors.veryLightBlack};
    height: 25vh;
    width: 48%;
    margin: auto;

    p.name {
      font-size: 3em;
      font-weight: 700;
    }

    p.subscript {
      opacity: 0.8;
      font-size: 0.8em;
      margin: 0;
    }
  }

  div.card-front {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.black};
    color: ${colors.white};
  }

  div.card-back {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${colors.white};
    color: ${colors.black};

    div.contact-link {
    }
  }
`;
