import React, {FC} from 'react';

// components
import {List} from "./components/list";

// types
import {ITasks} from "../../../../interfaces/tasks.interface";

interface IProps {
    tasks:Array<ITasks>
}

const TodoList: FC<IProps> = (props) => {
    return (
        <List tasks={props.tasks}/>
    );
};

export {TodoList};
