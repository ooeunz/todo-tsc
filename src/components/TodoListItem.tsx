import React, { Fragment } from 'react';
import './TodoListItem.css';

import { Todo } from '../types';

interface TodoListItem {
    todo: Todo;
    onComplete: (id: number) => void;
}

const TodoListItem: React.FC<TodoListItem> = ({
    todo: { id, text, complete },
    onComplete,
}) => {
    const handleComplete = () => {
        complete = true;
        onComplete(id);
    };
    return (
        <Fragment>
            <div className="todoListItem">
                <div>{text}</div>
                <div>
                    {complete === true ? <div>완료</div> : <div>미완료</div>}
                </div>
                <button type="submit" onClick={handleComplete}>
                    완료
                </button>
            </div>
        </Fragment>
    );
};

export default TodoListItem;
