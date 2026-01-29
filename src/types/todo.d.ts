interface ITodoContent {
    content: string
}

interface ITodoItem extends ITodoContent {
    id: number;
    completed: boolean;
    editing: boolean;
}