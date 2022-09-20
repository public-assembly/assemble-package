import ReactDOM from 'react-dom/client'
import React from 'react'
import { App } from './App';
import { ExampleImports } from './components/example/ExampleImports';

const domContainer = document.getElementById('main');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <App>
    <ExampleImports />
  </App>
);