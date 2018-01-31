import React from 'react';
import ReactDOM from 'react-dom';

import Sandbox from './Sandbox';

const element = document.getElementById('content');
ReactDOM.render(<Sandbox />, element);

document.body.classList.remove('loading');
document.body.style.margin = 0;
