export default function(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_MAP':
      return action.payload;
    default:
      return state;
  }
}
