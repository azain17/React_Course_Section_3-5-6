import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  
  const [isEditing, setIsEditing] = useState(false)

  const handleStartEditing = () => {
    setIsEditing(true)
  }

  const handleStopEditing = () => {
    setIsEditing(false)
  }

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={handleStartEditing}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onCancel={handleStopEditing}/>}
    </div>
  );
};

export default NewExpense;
