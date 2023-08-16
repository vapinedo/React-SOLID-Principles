import axios from "axios";
import { useEffect, useState } from "react";

type Todotype = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
};

const TodoList = () => {
    const [data, setData] = useState<Todotype[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios
            .get<Todotype[]>("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                setData(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setIsFetching(false);
            })
    }, []);

    return (
        <ul>
            {data.map((todo) => {
                return (
                    <li>
                        <span>{todo.id}</span>
                        <span>{todo.title}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList