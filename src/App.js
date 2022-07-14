import React,{useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


var DUMMY_EXPENSE = [
  // {
  //   id : "e1",
  //   title : "Fuel Expense",
  //   amount : 2000,
  //   date : new Date(2021 ,1,25)
  // },
  // {
  //   id : "e2",
  //   title : "Car Insuranse",
  //   amount : 10000,
  //   date : new Date(2020 ,6,18)
  // },
  // {
  //   id : "e3",
  //   title : "Health",
  //   amount : 6000,
  //   date : new Date(2021 ,5,12)
  // }
];

function App() {
  const [expenses,setExpenseList] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    // const expenseData = {
    //   ...expense,
    //   id : Math.random().toString()
    // };
    setExpenseList((previousExpenses) => {
      return ([expense, ...previousExpenses]);
    });

    console.log(expenses);
    
  }
  
  
  return (
    <div>
      <NewExpense onAddExpeseData={addExpenseHandler}></NewExpense>
      <Expenses newExpenses={expenses}></Expenses>
    </div>   
  );
}
// return React.createElement(
//   'div',
//   {},
//   React.createElement('div',{},"First React App");
//   React.createElement(NewExpenses,{newExpenses: expenses});
// );

export default App;
