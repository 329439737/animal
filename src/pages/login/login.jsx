import React, { Component } from 'react'
// import Api from './../../assets/img/api/index'
import PropTpes from 'prop-types'

import style from './login.module.scss'
import axios from 'axios'
import './../../mock/mock'
import { SetSeeion } from './../../assets/img/unit/com.js'
import Loading from '././../loading/loading'
import { Row, Form, Input, Button, message } from 'antd'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons'
const FormItem = Form.Item

export default class Login extends Component {
 formRef = React.createRef()
  static propTypes = {
    history: PropTpes.object
  }

  state={

  }

  onFinish = (values) => {

  };

  setTime = () => {
    const timeid = setTimeout(() => {
      this.props.history.push({ pathname: '/admin/info' })
    }, 0)
  }

  btnFinish = () => {
    <Login></Login>
    const form = this.formRef.current
    const curForm = form.validateFields()
    curForm.then(val => {
      axios.get('/inst').then(res => {
        const { data } = res

        if (data.code === 10000) {
          if (data.message.name === val.name && data.message.password === val.password) {
            SetSeeion('setinfo', 'mytoken')
            this.setTime()
          } else {
            message.error('账号或密码不正确')
          }
        } else {
          message.error('登录失败')
        }
      })
    }).catch(errorInfo => {
      // console.log(errorInfo)
    })
  }

  render () {
    return (
     <div className={style.main}>
       {/* 头部占位符 */}
      <header></header>

      <section className={style.section}>
         <Row className={style.antd_row}>
           <div className={style.title_animal}></div>
            <h3 className={style.title_h3}>宠物之家管理系统</h3>
            <p className={style.title_p}>动物的快乐源泉</p>
         </Row>

         <Row>
           <div className={style.login_form}>

          <Form onFinish={this.onFinish} name="control-ref" ref={this.formRef}>

           <FormItem
            name="name"
            rules={[{ required: true, message: 'username不能为空' }]} >
           <Input size="large" placeholder="username" prefix={<UserOutlined />} />
           </FormItem>

           <FormItem
           name="password"
           rules={[{ required: true, message: 'password不能为空' }]}
           >
           <Input.Password size="large" placeholder="password" prefix={<UnlockOutlined />} />
           </FormItem>
           <Button type='primary' htmlType='button' onClick={() => { this.btnFinish() }}>login</Button>

          </Form>
           </div>
         </Row>
      </section>

      {/* 尾部占位符 */}
      <footer className={style.footer}>

        <Row className={style.foot_div}>

             <p>Create:2021/6/29 &nbsp;  &nbsp;Author:溺水有三千</p>

        </Row>

      </footer>

     </div>
    )
  }
}
