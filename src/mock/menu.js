import Mock from 'mockjs'
import { DownOutlined, PieChartOutlined, DesktopOutlined, FileOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';

Mock.setup({
  timeout: 100
})

// 生成模拟数据

Mock.mock('/menu', function () {
  return Mock.mock({
    code: 10000,
    meg: '请求成功',
    message: [
      {
        title: '首页',
        icon: '',
        key: 1,
        children: [
          {
            keyc: 10,
            titlt: '公告',
            path: '/admin/info'
          }
        ]
      },
      {
        title: '宠物日志',
        icon: '',
        key: 2,
        children: [
          {
            keyc: 20,
            titlt: '猫科',
            path: '/admin/cat'
          },
          {
            keyc: 21,
            titlt: '狗科',
            path: '/admin/dog'
          }
        ]
      },
      {
        title: '作业管理',
        icon: '',
        key: 3,
        children: [
          {
            keyc: 30,
            titlt: '作业信息',
            path: '/admin/test'
          }
        ]
      }

    ],
    page: 1
  })
})
