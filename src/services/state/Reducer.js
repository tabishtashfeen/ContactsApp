export const actions = {
  SET_USER: 'set_user',
  SET_CONTACTS: 'set_contacts',
  SET_NOTES: 'set_notes',
};

export const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actions.SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case actions.SET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
};
