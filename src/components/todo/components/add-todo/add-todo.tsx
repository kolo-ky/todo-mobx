import React, {FC, FormEvent} from 'react';

// style
import style from './add-todo.module.css';

const AddTodo: FC = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form action="#" className={style.root} onSubmit={(event) => handleSubmit(event)}>
            <input type="text" className={style.formInput}/>
            <button type="submit" className={style.formButton}>Добавить</button>
        </form>
    );
};

export {AddTodo};
