const defaultState = {
  inputValue: 'hello',
  list: ['a', 'b', 'c']
}
export default (state = defaultState, action) => {
  if (action.type === 'change_inputvalue') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.inputValue;
    return newState;
  }

  if (action.type === 'add_list') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(action.value);
    newState.inputValue = '';
    return newState;
  }

  return state
}
