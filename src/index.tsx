import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faAddressBook,
  faBlog,
  faCodeBranch,
  faEnvelopeOpen,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

library.add(
  fab,
  faHome,
  faAddressBook,
  faBlog,
  faCodeBranch,
  faGithub,
  faLinkedin,
  faEnvelopeOpen,
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
