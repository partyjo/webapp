import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Toast } from 'antd-mobile'
import ajax from 'http/index'
import './index.less'

class ArticleList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.thumb = 'http://partyjo.nextdog.cc/server/public/upload/20180816/9ab9006917cec4501672386c44d2ec12.jpeg'
    }
    componentWillMount () {
      this.getdata({
        cid: 1
      })
    }
    getdata (params) {
      ajax({
          method: 'get',
          url: '/article/all',
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
                    <div className='article-container'>
                        {
                            data.map(item => {
                                return (
                                    <Link className='article' key={item.id} to={'/article/detail/' + item.id}>
                                    <div className="thumb" style={{ backgroundImage: 'url('+item.thumb+')' }}></div>
                                    <div className="title">{item.title}</div>
                                    <div className="summary">{item.summary}</div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleList