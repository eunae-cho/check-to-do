interface ITodoContent {
    content: string
}

interface ITodoItem extends ITodoContent {
    id: string;
    completed: boolean;
    editing: boolean;
}