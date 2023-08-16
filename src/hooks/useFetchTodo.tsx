import { useEffect, useState } from "react";
import { fetchTodos, Todotype } from "../services/todos.service";

const useFetchTodo = () => {
    const [todo, setTodo] = useState<Todotype[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        fetchTodos()
            .then(todos => setTodo(todos))
            .finally(() => setIsFetching(false))
    }, []);

    return { todo, isFetching };
}

export default useFetchTodo