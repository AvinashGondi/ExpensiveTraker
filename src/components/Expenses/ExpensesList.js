import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    if(props.expensesListItems.length === 0){
        return <h2 className="expenses-list__fallback"> No Expenses Found </h2>
    }
    return <ul className="expenses-list">
        {
            props.expensesListItems.map( (expenses) => {
                return (
                  <ExpenseItem 
                  key = {expenses.id}
                  title = {expenses.title}
                  amount = {expenses.amount}
                  date = {expenses.date}
                  ></ExpenseItem>
                );
               
              })
        }
    </ul>
}


export default ExpensesList;