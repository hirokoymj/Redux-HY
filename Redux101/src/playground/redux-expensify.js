import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({id}) =>({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text)=>({
  type: 'SET_TEXT',
  text
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
const setStartDate = (startDate)=>({
  type: 'SET_START_DATE',
  startDate
});
const setEndDate = (endDate)=>({
  type: 'SET_END_DATE',
  endDate
});


// Reducer
const expenseDefaultState = [];
const expenseReducer = (state = expenseDefaultState, action)=>{
  switch (action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      // console.log('REMOVE_EXPENSE');
      // console.log(state);
      // console.log(action.id);
      //const output = state.filter(item => item.id !== action.id);
      return state.filter(({id}) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        }else{
          return expense;
        }
      });
      
    default: 
      return state;
  }
}


const filterDefaultState = {
  text: '',
  sortBy:'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterDefaultState, action)=>{
  switch (action.type){
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }      

    default: 
      return state;
  }
}


const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

store.subscribe(()=>{
  console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));
// console.log('expenseOne', expenseOne);
// console.log(expenseOne.expense.id);
//store.dispatch(removeExpense({id: expenseTwo.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(setTextFilter('hiroko'));
store.dispatch(setTextFilter('rent again'));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125)); // startDate 125
store.dispatch(setStartDate()); // startDate undefined
store.dispatch(setEndDate(1250)); // endDate 1250

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

