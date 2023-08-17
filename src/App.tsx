import './App.css'
import TodoList from './1-SingleResponsability/components/TodoList/TodoList';

function App() {
  return (
    <section className='container py-4'>
      <h1>
        React JS :: <small className="text-muted">SOLID Principles</small>
      </h1>
      <hr />

      <TodoList />
    </section>
  );
}

export default App
