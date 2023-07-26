import { instanceAxios } from "./apiService";
import { urls } from "../constans";

const todosEnpoints = {
    todos: urls.todos,
    todosId: (id) => urls.todos + `/${id}`
}

export const todosService = {
    getAll_Todos: () => instanceAxios.get(todosEnpoints.todos),
    getTodosId: (id) => instanceAxios.get(todosEnpoints.todosId(id))
}