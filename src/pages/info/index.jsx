import React, { Component } from 'react'
import { Card, Row, Input, Button, Empty, message } from 'antd'
import style from './index.module.scss'
import { DownOutlined, PieChartOutlined, DesktopOutlined, FileOutlined, UserOutlined, TeamOutlined, createFromIconfontCN } from '@ant-design/icons';
import axios from 'axios'
import Loading from './../loading/loading'
import { IconFont } from './../../iconfont/index'
import { connect } from 'react-redux'
import { addnum } from './../../redux/action'
import Ccard from './../../components/card'
import PropTpes from 'prop-types'
class Index extends Component {
  static propTypes = {
    // dispatch: PropTpes.func
    // num: PropTpes.number
  }

  state={
    datalist: [],
    no: 0,
    count: 0,
    loading: true
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
          count: 0,
          loading: false
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

  render () {
    const { datalist, count, loading } = this.state

    return (
      <div>

             {
               loading ? <Loading></Loading> : null
             }
           <Ccard h1title={'最新公告'} h2title={'宠物之家正式上线了~'}></Ccard>

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

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Index)
