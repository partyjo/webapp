import React from 'react';
import { Route } from 'react-router-dom';
import Bundle from './components/Bundle';

import HomePage from 'bundle-loader?lazy!./pages/home/index';

export default (
    <div>
        <Route path="/" exact component={Bundle(HomePage)} />
        <Route path="/home" component={Bundle(HomePage)} />
    </div>
)