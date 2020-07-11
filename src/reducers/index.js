export function reducer(state, action) {
  switch (action.type) {
    case 'setPrintPlacement':
      return { ...state, printPlacement: action.payload };
    case 'setPrice':
      return { ...state, price: action.payload };
    case 'setFirstName':
      return { ...state, firstName: action.payload };
    case 'setFrontGraphicId':
      return { ...state, frontGraphicId: action.payload };
    case 'setBackGraphicId':
      return { ...state, backGraphicId: action.payload };
    case 'setFrontGraphicStyle':
      return { ...state, frontGraphicStyle: action.payload };
    case 'setBackGraphicStyle':
      return { ...state, backGraphicStyle: action.payload };
    default:
      throw new Error();
  }
}
