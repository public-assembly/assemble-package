import ReactDOM from 'react-dom/client'
import React from 'react'
import { TestComponent } from 'react-package'

const domContainer = document.getElementById('main');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <main className="p-4">
    <TestComponent text=" Imported into a vanilla react parcel app"/>
  </main>
);