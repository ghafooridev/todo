interface Todo {
    id: number;
    title: string;
    completed: boolean
}

type TodoState = {
    todo: Todo[];
    filtered: boolean
};