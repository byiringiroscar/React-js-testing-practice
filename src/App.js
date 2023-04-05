import './App.css';
import Todo from './component/todo';

function App() {
  const todos = [
    {id: 1, title: 'WASH DISHES', completed: false},
    {id: 1, title: 'WASH Dinee', completed: true}
  ]
  return (
    <div className="App">
      {todos.map((todo) => {
        return (<Todo todo={todo} />)
      })}
    </div>
  );
}

export default App;
