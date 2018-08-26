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

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      console.log('INCREMENT');
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      console.log('DECREMENT');
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
});
console.log('Redux104');
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(increment({incrementBy: 5}));
store.dispatch(decrement({decrementBy: 1}));
store.dispatch(reset({count: 1}))
//store.dispatch(decrement(1));
//store.dispatch(reset(1));



