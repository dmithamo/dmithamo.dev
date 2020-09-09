import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      You must be lost.&nbsp;
      <NavLink to="/">Go home</NavLink>
    </div>
  );
}
