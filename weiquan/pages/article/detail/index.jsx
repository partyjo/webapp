import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Toast } from 'antd-mobile'
import ajax from 'http/index'
import './index.less'

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                
            }
        }
    }
    componentWillMount () {
        this.getdata({
          id: this.props.match.params.id
        })
      }
      getdata (params) {
        ajax({
            method: 'get',
            url: '/article/get',
            params: params
        }).then(res => {
            if (res.code === 0) {
                this.setState({
                  data: res.data
                })
            } else if (res.code === 1001) {
                Toast.fail(res.msg)
            }
        })
      }
    render() {
        const data = this.state.data;
        return (
            <div style={{ height: '100%', padding: '15px', boxSizing: 'border-box' }}>
                <div style={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.3)', padding: '20px', boxSizing: 'border-box', borderRadius: 10 }}>
                    <div className='article-detail-container'>
                        <div className='title'>{data.title}</div>
                        <img className='thumb' src={data.thumb} alt='thumb'/>
                        <div className='info'>{data.author + '  ' + data.update_time}</div>
                        <div className='content' dangerouslySetInnerHTML= {{ __html: data.link ? data.summary: data.content }}></div>
                        <div>{data.link ? <a className='link' href={data.link} target='_blank'>阅读原文</a> : ''}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ArticleDetail)