export default function(state = {}, action) {
  switch (action.type) {
    case 'ADD_MODAL':
      return {
        modalType: action.modalType,
        show: true,
        options: action.options
      };

    case 'REMOVE_MODAL':
      return {
        modalType: 'loading',
        show: false
      };

    default:
      return state;
  }
};
