// 创建seeion
export const SetSeeion = (key, value) => {
  if (!key) return
  window.localStorage.setItem(key, value)
}

// 获取token

export const GetSeeion = (key) => {
  return window.localStorage.getItem(key)
}
