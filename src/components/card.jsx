import React, { Component } from 'react'
import { Card, Row, Input, Button, Empty, message } from 'antd'
import { IconFont } from './../iconfont/index'
import PropTypes from 'prop-types'

export default class card extends Component {
  static propTypes = {
    h1title: PropTypes.string,
    h2title: PropTypes.string
  }

  render () {
    return (
      <Card><span><IconFont type='icon-ziyuan' style={{ fontSize: '18px', marginRight: '10px' }}>
        </IconFont></span><span style={{ color: 'red', fontWeight: 'bold' }}>{`${this.props.h1title}:`}</span>
      <span> {this.props.h2title}</span>
      </Card>
    )
  }
}
