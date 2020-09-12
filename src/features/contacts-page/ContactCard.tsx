/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';
import { breakpoints } from '../../common/constants';
import contactInfo from './contactInfo';
import ExternalLink from './ExternalLink';

export default function ContactCard(): JSX.Element {
  return (
    <StyledContactCard>
      <div className="card card-front">
        <p className="name">{contactInfo.name}</p>
        <p className="subscript">Software Engineer</p>
      </div>
      <div className="card card-back">
        <ExternalLink link={contactInfo.emailAddress} icon="envelope-open" />
        <ExternalLink link={contactInfo.github} icon={['fab', 'github']} />
        <ExternalLink link={contactInfo.linkedIn} icon={['fab', 'linkedin']} />
      </div>
    </StyledContactCard>
  );
}

const StyledContactCard = styled.div`
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin: auto;

  div.card {
    box-shadow: 1px 2px 5px 1px ${colors.lightBlack};
    height: 25vh;
    width: 450px;
    height: 280px;
    padding: 1em;
    font-weight: 700;
    border-radius: 10px;
  }

  p.name {
    font-size: 3em;
    font-weight: 700;
  }

  p.subscript {
    font-size: 1.3em;
    margin: 0;
    color: ${colors.offWhite};
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
  }

  @media (max-width: ${breakpoints.smallLaptop}) {
    width: 100%;
    flex-direction: column;
  }
`;
