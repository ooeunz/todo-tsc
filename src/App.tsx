import React, { useState, Fragment } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import { Todo } from './types';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [complete, setComplete] = useState<Todo[]>([]);
    let id = 0;

    const handleCreate = (data: string) => {
        setTodos([...todos, { id: id++, text: data, complete: false }]);
    };

    const handleComplete = (id: number) => {
        setComplete(todos.concat(todos.filter((todo) => todo.id === id)));
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <Fragment>
            <TodoInput onCreate={handleCreate} />
            <div>
                <h1>미완료</h1>
                <TodoList todos={todos} onComplete={handleComplete} />
            </div>
            <div>
                <h1>완료</h1>
                <TodoList todos={complete} onComplete={handleComplete} />
            </div>
        </Fragment>
    );
}

export default App;
