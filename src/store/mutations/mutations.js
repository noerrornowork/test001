export default {
  updateCount(state, num) {
    console.log('进来了吗?', state)
    state.count = state.count + num;
  },
  updateText(state) {
    console.log('改变文本');
    return state.firstName + state.lastName + 'vvv';
  }
}