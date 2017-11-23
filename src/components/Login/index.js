import './index.scss'
import React from 'react';
import { Button, Row, Form, Input,message } from 'antd'
import {config,session} from 'utils'
const FormItem = Form.Item

const handleOk = (_this) => {
    _this.props.form.validateFieldsAndScroll((errors, values) => {
        if (errors) {
            return
        }
        if(values.username !== config.admin.username || values.password !== config.admin.password ){
            message.error('账号或密码错误')
            return
        }
        message.success('登陆成功')
        session.set(config.sessionKey.userInfo,values)
        _this.props.history.push('/')
    })
}

class Login extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="LoginForm">
                <div className="form">
                    <div className="logo">
                        <img alt={'logo'} src={config.logo} />
                    </div>
                    <form>
                        <FormItem hasFeedback>
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true
                                    }
                                ]
                            })(<Input size="large" placeholder="Username" />)}
                        </FormItem>
                        <FormItem hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true
                                    }
                                ]
                            })(<Input size="large" type="password" placeholder="Password" />)}
                        </FormItem>
                        <Row>
                            <Button type="primary" size="large" onClick={()=>handleOk(this)} >
                                登陆
                            </Button>
                        </Row>
                    </form>
                </div>
            </div>
        )
    }
}

Login = Form.create()(Login);

export default Login;
