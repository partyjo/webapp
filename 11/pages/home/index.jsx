import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd-mobile'
import './index.less'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    name: '妇儿天地',
                    link: '/category'
                },
                {
                    id: 2,
                    name: '工会',
                    link: '/category'
                },
                {
                    id: 3,
                    name: '团委',
                    link: '/category'
                }
            ]
        }
    }
    render() {
        return (
            <div style={{ padding: '150px 0' }}>
                <div className='container'>
                    {
                        this.state.data.map(item => {
                            return (
                                <Link key={item.id} to={item.link + '/' + item.id}>{item.name}</Link>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}