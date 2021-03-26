import React, {FC} from 'react';

// styles
import style from './list.module.css';

// types
import {ITasks} from "../../../../../../interfaces/tasks.interface";

// components
import {Item} from "../item";

interface IProps {
    tasks:Array<ITasks>
}

const List: FC<IProps> = (props) => {
    return (
        <ul className={style.root}>
            {
                props.tasks.map(task => {
                    return (
                        <Item title={task.title}/>
                    );
                })
            }
        </ul>
    );
};

export {List};
