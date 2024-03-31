let initialState = {
  contactList: [],
  searchWord: '',
};
function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phone: payload.phone },
        ],
      };
    case 'USER-SEARCH':
      return {
        ...state,
        searchWord: payload.searchWord,
      };
    default:
      return { ...state };
  }
}

export default reducer;
