import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import routes from './routes'
import Layout from 'layouts/index';

ReactDOM.render(
    <Layout>
			<HashRouter>
        {routes}
    	</HashRouter>
		</Layout>,
    document.getElementById('app')
)