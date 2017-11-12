function urls(state = [], action) {
  switch (action.type) {
    case 'ADD_URL' :
      return {
        ...state,
        [action.url.id]: action.url
      };
    default:
      return state;
  }
}

export default urls;
