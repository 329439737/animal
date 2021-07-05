import React, { Component } from 'react'
import styles from './sides.module.scss'
import { Menu, Layout } from 'antd'
import PropTpes from 'prop-types'
const { Sider } = Layout
const { SubMenu } = Menu;
export default class sides extends Component {
  static propTypes = {
    history: PropTpes.object,
    menu: PropTpes.array
  }

  state = {
    selectedKeys: [],
    openKeys: []
  };

  componentDidMount () {

  }

  // onOpenChange
 onOpenChange = (keys) => {
   const { openKeys } = this.state
   this.setState({
     openKeys: keys
   })
 }

// 跳转路由
getrouter = (index) => {
  this.setState({
    selectedKeys: [index.keyc]
  }, this.props.history.push(index.path))
}

render () {
  const { selectedKeys, openKeys } = this.state
  const { menu } = this.props
  return (

            <Sider >
             <div className={styles.logo} >
               <div className={styles.div_logo}></div>
               <div className={styles.div_title}>宠物之家</div>
             </div>
               <Menu theme="dark" mode="inline"
                selectedKeys={selectedKeys}
                openKeys={openKeys}
                onOpenChange={this.onOpenChange}

                 >

            {

              menu.map((item, index) => (
               <SubMenu key={item.key} icon={item.icon} title={item.title}>
                 {
                   item.children.map((item1, index1) => (
                    <Menu.Item key={item1.keyc} onClick={() => { this.getrouter(item1) }}>{item1.titlt}</Menu.Item>
                   ))
                 }
               </SubMenu>
              ))
            }
          </Menu>
        </Sider>

  )
}
}
