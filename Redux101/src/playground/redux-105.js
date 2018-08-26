import { createStore } from 'redux';
// Actions
const increment = ({incrementBy=1} = {})=>({
  type: 'INCREMENT',
  incrementBy
});

const decrement = ({decrementBy=1}={})=>({
  type: 'DECREMENT',
  decrementBy
});

const reset = ({count})=>({
  type: 'RESET',
  count
});

// this is NOT pure function
let a = 10;
const add = (b)=>{
  return a+b;
}

// THIS IS THE PURE FUNCTION
const add2 = (a, b)=>{
  return a+b;
}

// Reducer
const countReducer = (state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: action.count
      }
    default:
      return state;          
  }
};

const store = createStore(countReducer);

console.log('Redux105');
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(increment({incrementBy: 5}));
store.dispatch(decrement({decrementBy: 1}));
store.dispatch(reset({count: 1}))
//store.dispatch(decrement(1));
//store.dispatch(reset(1));



