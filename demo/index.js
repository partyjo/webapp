import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route } from 'react-router-dom';

import routes from './routes';

const App = () => (
    <HashRouter>
        {routes}
    </HashRouter>
)

ReactDOM.render(
    <App />,
    document.getElementById('app')
);