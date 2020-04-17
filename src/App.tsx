import React, { useState, Fragment } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import './App.css';

import { Todo } from './types';

let id = 0;

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [complete, setComplete] = useState<Todo[]>([]);

    const handleCreate = (data: string) => {
        setTodos([...todos, { id: id++, text: data, complete: false }]);
    };

    const handleComplete = (id: number) => {
        let todo = todos.filter((todo) => todo.id === id);
        todo[0].complete = true;

        setComplete(complete.concat(todo[0]));
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    console.log(todos);

    return (
        <Fragment>
            <div className="container">
                <TodoInput onCreate={handleCreate} />
                <div id="ready">
                    <h1>미완료</h1>
                    <TodoList todos={todos} onComplete={handleComplete} />
                </div>
                <div id="complete">
                    <h1>완료</h1>
                    <TodoList todos={complete} onComplete={handleComplete} />
                </div>
            </div>
        </Fragment>
    );
}

export default App;
