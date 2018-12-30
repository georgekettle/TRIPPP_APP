export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_PIN':
      console.log("fetch pin action payload");
      console.log(action.payload);
      return action.payload;
    case 'PIN_CREATED':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
