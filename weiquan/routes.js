import React from 'react'
import { Route } from 'react-router-dom'
import Bundle from 'utils/Bundle'

import HomePage from 'bundle-loader?lazy!./pages/home/index'
import categoryPage from 'bundle-loader?lazy!./pages/category/index'
import weiquanPage from 'bundle-loader?lazy!./pages/form/index'

export default (
    <div>
        <Route path="/" exact component={Bundle(HomePage)} />
        <Route path="/home" component={Bundle(HomePage)} />
        <Route path="/category/:pid" component={Bundle(categoryPage)} />
        <Route path="/weiquan/:pid/:cid" component={Bundle(weiquanPage)} />
    </div>
)