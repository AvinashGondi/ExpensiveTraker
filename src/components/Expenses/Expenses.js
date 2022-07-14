import React,{useState} from 'react'

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart'
import "./Expenses.css";

function Expenses(props) {

  const [filteredYear,setSelectedYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    // console.log("expense.js");
    // console.log(selectedYear);
    setSelectedYear(selectedYear);
  }
  const filteredExpenses = props.newExpenses.filter((expensesList) => {
    return (String(expensesList.date.getFullYear())===filteredYear);
  })

  return (
    <div>
      
      <Card className="expenses">

        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

        <ExpensesChart expenses={filteredExpenses}/>

        <ExpensesList expensesListItems = {filteredExpenses}></ExpensesList>

        {/* <ExpenseItem
          title={props.newExpenses[0].title}
          amount={props.newExpenses[0].amount}
          date={props.newExpenses[0].date}
        />
        <ExpenseItem
          title={props.newExpenses[1].title}
          amount={props.newExpenses[1].amount}
          date={props.newExpenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.newExpenses[2].title}
          amount={props.newExpenses[2].amount}
          date={props.newExpenses[2].date}
        ></ExpenseItem> */}

      </Card>

    </div>
  );
}

export default Expenses;
