# Connecting Store and Component with React-Redux

- [React-Redux library](https://github.com/reduxjs/react-redux)

### Provider store
- Provider allows us to provide the store to all of the components that make up our application.
  
```js
import { Provider } from 'react-redux';

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
```

### connect function
- Connect redux store in ExpenseList.


#### ExpenseList Component - sample-1

```js
import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.name}
  </div>
);

const ConnectExpenseList = connect((state)=>{
  return {
    name: 'Andrew'
  }
})(ExpenseList);

export default ConnectExpenseList;
```
<hr />

#### ExpenseList Component - sample-2

```js
import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
  </div>
);

const ConnectExpenseList = connect((state)=>{
  return {
    expenses: state.expenses
  }
})(ExpenseList);

export default ConnectExpenseList;
```
<hr />


#### ExpenseList Component - sample-3
```js
import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
  </div>
);

const mapStateToProps = (state)=>{
  return {
    expenses: state.expenses
  }
}
export default connect(mapStateToProps)(ExpenseList);

```



