import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense (props) {

    const [isEditing,setIsEditing]=useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpeseData(expenseData);
        setIsEditing(false);
    }

    const editChangeHandler = () => {
        setIsEditing(true);
    }
    const cancelHandler = () => {
        setIsEditing(false);
    }

    return <div className="new-expense">
        {!isEditing && <button type="button" onClick={editChangeHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
}

export default NewExpense;