import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Destructuring from './Destructuring';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const bio = {
  name: 'nikhil',
  age: 23,
  love: 'leetcode',
};
root.render(
  <StrictMode>
    <App />
    <Destructuring bio={bio} />
  </StrictMode>
);
