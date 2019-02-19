
export default function(state = [], action) {
  switch (action.type) {

    case 'ADD_ALERT':
      const uuidv1 = require('uuid/v1');
      return [
        ...state,
        {
          text: action.text,
          style: action.style,
          id: uuidv1()
        }
      ];

    case 'REMOVE_ALERT':
      return state.filter((alert) => {
        if (alert.id === action.id ) {
          return false;
        } else {
          return true;
        }
      });

    default:
      return state;
  }
};
