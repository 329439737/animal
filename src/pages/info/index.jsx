import React, { Component } from 'react'
import { Card, Row, Input, Button, Empty, message } from 'antd'
import style from './index.module.scss'
import axios from 'axios'
export default class index extends Component {
  state={
    datalist: [],
    no: 0,
    count: 0
  }

  componentDidMount () {
    this.getimg()
  }

  // 获取列表
  getimg = () => {
    const { no, count } = this.state
    axios.get(`http://www.liulongbin.top:3005/api/getimages/${no}`).then((res) => {
      const { data } = res

      if (res.data.status === 0) {
        this.setState({
          datalist: res.data.message,
          count: 0
        })
      } else {
        message.error(res.data.message)
        this.setState({
          count: count + 1
        })
      }
    })
  }

  //
  getinput=(e) => {
    this.setState({
      no: e.target.value
    })
  }

  // getbutton
  getbutton=() => {
    const { no } = this.state

    this.getimg()
  }

  render () {
    const { datalist, count } = this.state
    return (
      <div>
           <Row>

                  <Card style={{ width: '100%' }}><span style={{ color: 'red', fontWeight: 'bold' }}>最新公告：</span>
                  <span> 宠物之家正式上线了~</span>
                  </Card>

           </Row>

           <Card style={{ marginTop: '15PX' }}>
             <Row>
             <Input onChange={(e) => { this.getinput(e) }} style={{ width: '200px', marginRight: '20px' }} placeholder="请输入查询编码"></Input>
             <Button type='primary' onClick={() => { this.getbutton() }}>点击查询</Button>

             {
                count > 3 ? <span style={{ color: 'red' }}>不如输入20、3、0试试</span> : null

             }

             </Row>

             <div className={style.maindiv}>

                {
                   datalist.length > 0
                     ? datalist.map((item, i) => (
                    <div className={style.imgdiv} key={i}><img className={style.img} src={item.img_url}></img></div>
                     ))
                     : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
                }
             </div>

           </Card>
      </div>
    )
  }
}
