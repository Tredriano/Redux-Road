const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200
};
const wagonReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1
      };
    }
    case 'travel': {
      if (state.supplies - (20*action.payload) <= 0) {
        return state
      } else
      return {
        ...state,
        supplies: state.supplies - (20 * action.payload),
        distance: state.distance + (10 * action.payload),
        days: state.days + action.payload
      };
    }
    case 'tippedWagon' : {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      };
    }
    case 'sell' : {
      if (state.supplies - (20*action.payload) <=0) {
        return 'Apologies but you are trying to sell outside your means. Please ensure you have supplies to sell.' 
      } else 
      return {
        ...state,
        supplies: state.supplies - (20 * action.payload),
        cash: state.cash + (5 * action.payload)
      };
    }
    case 'buy' : {
      if (state.cash - (15 * action.payload) <= 0) {
        return 'Apologies but you are trying to buy outside of your means. Please ensure that you have enough cash to buy your supplies.'
      } else 
      return {
        ...state,
        supplies: state.supplies + (25 * action.payload),
        cash: state.cash - (15 * action.payload)
      };
    }
    case 'theft' : {
      return {
        ...state,
        cash: state.cash / 2
      };
    }
  default: {
    return state;
    }
  }
}

let wagon = wagonReducer(undefined, {});
//console.log(wagon);

//console.log(wagon = wagonReducer(wagon, {type: 'travel', payload: 1}));
//console.log(wagon = wagonReducer(wagon, {type: 'gather', payload: null}));
//console.log(wagon = wagonReducer(wagon, {type: 'tippedWagon'}));
//console.log(wagon = wagonReducer(wagon, {type: 'travel', payload: 3}));
console.log(wagon = wagonReducer(wagon, {type: 'sell', payload: 6}));
