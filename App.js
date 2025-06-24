// const heading = document.createElement('h1');
// heading.innerText = 'hiiiii';
// const root = document.getElementById('root').appendChild(heading);
// root.render(heading);
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {}, 'namasthey React');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
