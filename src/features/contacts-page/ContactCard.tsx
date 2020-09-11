/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';
import contactInfo from './contactInfo';

export default function ContactCard(): JSX.Element {
  return (
    <StyledContactCard>
      <div className="container">
        <div className="logo">dm</div>

        <div className="contacts">
          <p className="fullname">{contactInfo.name}</p>
          <p className="link">{contactInfo.emailAddress}</p>
          <p className="link">{contactInfo.phoneNumber}</p>
        </div>
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

  div.container {
    box-shadow: 1px 2px 5px 1px ${colors.veryLightBlack};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
    height: 25vh;
    margin: auto;

    div.logo {
      width: fit-content;
      background-color: ${colors.black};
      color: ${colors.white};
      font-size: 3em;
      font-weight: 700;
      padding: 0 0.5em;
    }

    div.contact-info {
      flex-grow: 1;
    }
  }
`;
