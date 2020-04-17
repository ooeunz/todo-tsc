import React from 'react';
import { Todo } from '../types';
import TodoListItem from './TodoListItem';

interface TodoListProps {
    todos: Array<Todo>;
    onComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onComplete }) => {
    const data = todos.map((todo) => (
        <TodoListItem todo={todo} onComplete={onComplete} key={todo.id} />
    ));
    return <div>{data}</div>;
};

export default TodoList;
