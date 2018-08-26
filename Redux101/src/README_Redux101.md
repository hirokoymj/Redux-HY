# Redux Basic - 1
## Actions
 - Actions allow us to change the redux store.
 - Actions is nothing more than an object that gets sent to the store.

```js
// Example of action
{type: 'INCREMENT'}
```

## dispatch
- dispatch allows us to send off an action object

```js
const store = createStore(reducer);
store.dispatch(action);
```

## subscription
- Track state changes
```js
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
})
```


## Reducer
- Reducer determines what to do based off an action. How do we want to change the state.
- Recucers are pure functions. => output is only determined by input. It doesnt' use anything outside the functino scope and it doesn't change anything outside the function scope either.
- redux-expensify.js : expenses properties manages `expenseReducer()` and filter properties manages `filterReducer()`

## Basic Redux example
```js
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});
console.log(store.getState());
```

### References: 
https://redux.js.org/basics

## Quiz

### Q1: 
- Create store using Redux `createStore()`
- `state` default value is count=0
- print state
  
### Q1-Answer
```js
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});
console.log(store.getState());
```  

<hr />

### Q2:
- Create increment action and send to store.

### Q2-Answer
```js
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count +1
      }
    default:
      return state;          
  }
});

console.log(store.getState()); //{count: 0}

store.dispatch({
  type: 'INCREMENT'
});
console.log(store.getState()); //{count: 1}
```

<hr />

### Q3:
- Tracking state change using `subscription` method

### Q3 - Answer:
```js
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count +1
      }
    default:
      return state;          
  }
});

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});

store.dispatch({
  type: 'INCREMENT'
});
```