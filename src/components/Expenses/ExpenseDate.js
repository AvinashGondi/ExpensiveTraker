import './ExpenseDate.css'

function ExpenseDate(props) {
    const months = props.date.toLocaleString('en-US',{month :'long'});
    const days = props.date.toLocaleString('en-US',{day:'2-digit'});
    const years = props.date.getFullYear();
    return (
        <div className='expense-date'>
          <div className='expense-date__month'>{months}</div>
          <div className='expense-date__year'>{years}</div>
          <div className='expense-date__day'>{days}</div>
        </div>
    );
}

export default ExpenseDate;