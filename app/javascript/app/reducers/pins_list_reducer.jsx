export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_PINS':
      return action.payload;
    case 'PIN_CREATED': {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      console.log(copiedState);
      return copiedState;
    }
    default:
      return state;
  }
}
