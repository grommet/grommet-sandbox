import React from 'react';
import ReactDOM from 'react-dom';

import Sandbox from './Sandbox';

const element = document.getElementById('content');
const dataElement = document.querySelector('meta[property="grommet:sandbox"]');
const routePrefix = dataElement && dataElement.getAttribute('routeprefix');

ReactDOM.render(<Sandbox routePrefix={routePrefix} />, element);

document.body.classList.remove('loading');
document.body.style.margin = 0;
