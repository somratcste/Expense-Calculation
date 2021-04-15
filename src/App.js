import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { id: 'e1', title: 'Car Insurance 1', amount: 294.67, date: new Date("2021-03-28") },
    { id: 'e2', title: 'Car Insurance 2', amount: 294.67, date: new Date("2021-03-28") },
    { id: 'e3', title: 'Car Insurance 3', amount: 294.67, date: new Date("2021-03-28") },
    { id: 'e4', title: 'Car Insurance 4', amount: 294.67, date: new Date("2021-03-28") },
  ];

return (
  <div className="App">
    Let's Get Started
    <ExpenseItem 
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date} />
  </div>
);
}

export default App;
