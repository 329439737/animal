import React, { Component } from 'react'

import { Spin } from 'antd'
import style from './loading.module.scss'

export default class loading extends Component {
  state={
    tip: '加载中...'
  }

  render () {
    const { tip } = this.state
    return (
      <div className={style.main}>
       <Spin tip={tip}></Spin>
      </div>
    )
  }
}
