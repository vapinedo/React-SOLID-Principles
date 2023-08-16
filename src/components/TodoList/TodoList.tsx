import axios from "axios";
import { useEffect, useState } from "react";

type Todotype = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
};

const useFetchTodo = () => {
    const [todo, setTodo] = useState<Todotype[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios
            .get<Todotype[]>("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                setTodo(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    return {todo, isFetching};
};

const TodoList = () => {
    const { todo, isFetching } = useFetchTodo();

    if (isFetching) return <p>Loading ...</p>
    
    return (
        <ul>
            {todo.map((todo) => {
                return (
                    <li key={todo.id}>
                        <span>{todo.id}. </span>
                        <span>{todo.title}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList