function urls(state = [], action) {
  switch (action.type) {
    case 'SHORTEN_URL' :
      console.log(`${action.type} dispatched`);
      return [...state, {action}];
    default:
      return state;
  }
}

export default urls;
