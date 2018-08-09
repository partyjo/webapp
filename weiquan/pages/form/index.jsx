import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, List, InputItem, TextareaItem } from 'antd-mobile'
import './index.less'

class weiquanForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                id: props.match.params.id,
                cid: props.match.params.cid,
                name: '',
                mobile: '',
                needs: ''
            }
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        const formData = this.state.formData
        if (formData.mobile.length != 11) {
            alert('联系电话格式不正确')
        }
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
                    <Button type='primary' onClick={this.handleClick}>提交</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(weiquanForm)