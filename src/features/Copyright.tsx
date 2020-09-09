import React from 'react';

export default function Copyright() {
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
      &copy;2020&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/dmithamo"
      >
        dmithamo
      </a>
    </div>
  );
}
