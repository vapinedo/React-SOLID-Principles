import axios from "axios";

export type Todotype = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
};

export const fetchTodos = () => {
    return axios    
        .get<Todotype[]>("https://jsonplaceholder.typicode.com/todos")
         .then(res => res.data)
}; 