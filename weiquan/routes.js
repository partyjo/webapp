import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Bundle from 'utils/Bundle'

import HomePage from 'bundle-loader?lazy!./pages/home/index'
import CategoryPage from 'bundle-loader?lazy!./pages/category/index'
import WeiquanPage from 'bundle-loader?lazy!./pages/form/index'
import ArticleListPage from 'bundle-loader?lazy!./pages/article/list/index'
import ArticleDetailPage from 'bundle-loader?lazy!./pages/article/detail/index'

export default (
    <Switch>
        <Route path="/" exact component={Bundle(HomePage)} />
        <Route path="/home" component={Bundle(HomePage)} />
        <Route path="/category/:pid" component={Bundle(CategoryPage)} />
        <Route path="/weiquan/:pid/:cid" component={Bundle(WeiquanPage)} />
        <Route path="/article/list" component={Bundle(ArticleListPage)} />
        <Route path="/article/detail/:id" component={Bundle(ArticleDetailPage)} />
    </Switch>
)