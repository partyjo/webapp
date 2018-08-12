import React from 'react'
import { withRouter } from 'react-router-dom'
import ajax from 'http/index'
import { Button, List, InputItem, TextareaItem, Toast } from 'antd-mobile'
import './index.less'

class weiquanForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                pid: parseInt(props.match.params.pid),
                cid: parseInt(props.match.params.cid),
                name: '',
                mobile: '',
                needs: ''
            }
        }
    }
    handleClick() {
        const formData = this.state.formData
        ajax({
            method: 'post',
            url: '/forms/add',
            data: formData
        }).then(res => {
            if (res.code === 0) {
                Toast.success('提交成功', 5, function() {
                    window.location.reload()
                })
            } else if (res.code === 1001) {
                Toast.fail(res.msg)
            }
        })
    }
    handleChange(key, value) {
        const formData = this.state.formData
        formData[key] = value
        this.setState({
            formData
        })
    }
    render() {
        const formData = this.state.formData;
        return (
            <div style={{ padding: '25% 0' }}>
                <div className='container'>
                    <List style={{ marginBottom: '20px' }}>
                        <InputItem value={formData.name} placeholder='您的姓名' onChange={this.handleChange.bind(this, 'name')}></InputItem>
                        <InputItem value={formData.mobile} placeholder='您的联系电话' onChange={this.handleChange.bind(this, 'mobile')}></InputItem>
                        <TextareaItem value={formData.needs} rows={5} placeholder='您的主要诉求' onChange={this.handleChange.bind(this, 'needs')}></TextareaItem>
                    </List>
                    <Button type='primary' onClick={this.handleClick.bind(this)}>提交</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(weiquanForm)