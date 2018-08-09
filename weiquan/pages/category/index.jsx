import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'antd-mobile'
import './index.less'

class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                1: [
                    {
                        id: 1,
                        name: '在线维权',
                        link: '/weiquan'
                    },
                    {
                        id: 2,
                        name: '妇女之声',
                        link: '/'
                    }
                ],
                2: [
                    {
                        id: 1,
                        name: '在线维权',
                        link: '/weiquan'
                    }
                ],
                3: [
                    {
                        id: 1,
                        name: '在线维权',
                        link: '/weiquan'
                    }
                ]
            }
        }
    }
    render() {
        const id = this.props.match.params.id
        const data = this.state.data[id];
        return (
            <div style={{ padding: '150px 0' }}>
                <div className='container'>
                    {
                        data.map(item => {
                            return (
                                <Link key={item.id} to={item.link+ '/' + id + '/' + item.id}>{item.name}</Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Category)