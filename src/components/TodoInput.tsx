import React, { useState } from 'react';
import './TodoInput.css';

interface TodoInputProps {
    onCreate: (data: string) => void;
}
const TodoInput: React.FC<TodoInputProps> = ({ onCreate }) => {
    const [content, setContent] = useState<string>('');

    const handleChange = (e: any) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onCreate(content);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="input-box"
                    name="content"
                    onChange={handleChange}
                />
                <button className="btn" type="submit">
                    제출 해보자
                </button>
            </form>
        </div>
    );
};

export default TodoInput;
