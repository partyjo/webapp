import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd-mobile';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, home</h1>
                <NavLink to="/404">404 page</NavLink>
                <Button type="primary">home</Button>
            </div>
        );
    }
}