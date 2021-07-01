import Mock from 'mockjs'

Mock.setup({
  timeout: 100
})

// 生成模拟数据

Mock.mock('/inst', function () {
  return Mock.mock({
    code: 10000,
    meg: '请求成功',
    message: {
      name: '666',
      password: '666'
    },
    page: 1
  })
})
