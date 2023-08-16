const TodoItem = ({ todo }) => {
  return (
    <li key={todo.id}>
        <span>{todo.id}. </span>
        <span>{todo.title}</span>
    </li>
  )
}

export default TodoItem