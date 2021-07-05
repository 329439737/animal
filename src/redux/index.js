import {
  createStore
} from 'redux';
const statee = {
  a: 3
}
const counter = (state = statee, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        b: 555,
        numm: action.num
      };
    default: return state
  }
};

const store = createStore(counter) // 创建包含指定 reducer 的 store 对象
export default store;
