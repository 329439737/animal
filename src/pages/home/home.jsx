import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button } from 'antd'
import { DownOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons';
import styles from './index.module.scss'
import axios from 'axios'
import { IconFont } from './../../iconfont/index'
import './../../mock/menu'
import { routerMap } from './../../routes/index.js'
import { Switch, Route } from 'react-router-dom'
import PropTpes from 'prop-types'
import Sides from './../../components/sides'
import { ClearSeeion, GetSeeion } from './../../assets/img/unit/com'
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

  // 渲染用户下拉菜单
  renderDropMenu = () => {
    return (
      <Menu style={{ marginLeft: '40px' }} onClick={(item) => this.handleMenuClick(item.key)}>
        <Menu.Item key={1}>
          <FormOutlined />修改密码
        </Menu.Item>
        <Menu.Item key={2}>
        <LogoutOutlined />退出登录
        </Menu.Item>
      </Menu>
    )
  }

   // 点击菜单
   handleMenuClick = (key) => {
     if (+key === 1) {
       this.props.history.push('/login')
     }

     if (+key === 2) {
       ClearSeeion('setinfo')
       this.props.history.push('/login')
     }
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
               <SubMenu key={item.key} title={item.title}
               >
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
          <div className={styles.headerBar}>

            <Row gutter={20} style={{ height: '44px' }}>
              <Col span={22}>
              <Breadcrumb style={{ lineHeight: '44px' }}>
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
              </Col>

              <Col span={2} style={{ height: '44px' }}>
                 <Dropdown overlay={this.renderDropMenu()} placement='bottomCenter' >
                    <Button type='link' style={{ height: '44px' }}>
                      <IconFont type='icon-yonghu' style={{ fontSize: '30px' }}></IconFont>

                       <span>{GetSeeion('setinfo')}</span>
                       <DownOutlined></DownOutlined>
                    </Button>
                  </Dropdown>
              </Col>
            </Row>
            </div>
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
