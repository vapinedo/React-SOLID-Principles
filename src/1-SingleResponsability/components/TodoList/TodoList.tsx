import useFetchTodo from "../../hooks/useFetchTodo";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
    const { todo, isFetching } = useFetchTodo();

    if (isFetching) return <p>Loading ...</p>

    return (
        <ul>
            {todo.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
    )
}

export default TodoList 