import React, {FC} from 'react';

// types
import {ITasks} from "../../interfaces/tasks.interface";

// styles
import style from './todo.module.css';

// components
import {AppHeader} from "./components/app-header";
import {TodoList} from "./components/todo-list";
import {AddTodo} from "./components/add-todo";

interface IProps {
    tasks:Array<ITasks>
}

const Todo: FC<IProps> = (props) => {
    return (
        <div className={style.todo}>
            <AppHeader />
            <AddTodo />
            <TodoList tasks={props.tasks}/>
        </div>
    );
};

export {Todo};
