/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/**
 *
 * Actions Types
 *
 */
export const Types = {
    CURRENT_SCREEN: 'navigation/CURRENT_SCREEN',
    CHECKOUT_STEP: 'navigation/CHECKOUT_STEP',
};
  
  /**
  *
  * Reducers
  *
  */
const initialState = {
    currentScreen: 'Profile',
    checkoutStep: 0,
};

export default function reducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case Types.CURRENT_SCREEN:
            const { currentScreen, checkoutStep } = payload;
            return { ...state, currentScreen, checkoutStep };
        case Types.CHECKOUT_STEP:
            return { ...state, checkoutStep: payload };
        default:
            return state;
}
}
  
  /**
  *
  * Actions Creators
  *
  */
  
  export function setCurrentScreen(screenName) {
  
    let checkoutStep;
  
    switch (screenName) {
      case 'BookList':
        checkoutStep = 0;
        break;
      case 'BookPhoto':
        checkoutStep = 1;
        break;
      case 'BookNameDescription':
        checkoutStep = 2;
        break;
      case 'BookDetails':
        checkoutStep = 3;
        break;
      default:
        checkoutStep = 0;
        break;
    }
    
    return {
      type: Types.CURRENT_SCREEN,
      payload: { currentScreen: screenName, checkoutStep },
    };
  }
  
