import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown } from 'antd'
import { DownOutlined, PieChartOutlined, DesktopOutlined, FileOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import styles from './index.module.scss'
import axios from 'axios'
import './../../mock/menu'
import { routerMap } from './../../routes/index.js'
import { Switch, Route } from 'react-router-dom'
import PropTpes from 'prop-types'
import Sides from './../../components/sides'
const { Footer, Content, Sider, Header } = Layout
const { SubMenu } = Menu;
export default class home extends Component {
  static propTypes = {
    history: PropTpes.object
  }

  state = {
    menu: [],
    selectedKeys: [],
    openKeys: []
  };

  componentDidMount () {
    this.getMenuInfo()
  }

 // 获取菜单
 getMenuInfo = () => {
   axios.get('/menu').then(res => {
     const { code, message } = res.data
     if (code === 10000) {
       this.setState({
         menu: message
       })
     }
   })
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
   const { menu, selectedKeys, openKeys } = this.state

   return (
          <div>
            <Layout style={{ minHeight: '100vh' }}>
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

        <Layout className="site-layout">
          <Header className={styles.header}>
           <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              {
              routerMap.map((route, i) => {
                if (route.path && location.pathname.match(route.path)) {
                  return (<Breadcrumb.Item key={i}>{route.name}</Breadcrumb.Item>)
                }
                return ''
              })
            }
            </Breadcrumb>

          </Header>
          <Content style={{ margin: '16px 16px' }}>
                 <Switch>
                   {
                    routerMap.map((route, i) => (
                      <Route
                      name={route.name}
                      exact
                      key={i}
                      path={route.path}
                      render={props => (
                        <route.component {...props} />
                      )}
                    />
                    ))
                   }
                 </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>宠物之家&nbsp;Author:溺水有三千</Footer>
        </Layout>

           </Layout>
          </div>
   )
 }
}
