import React, {FC} from 'react';
import {CheckBoxCheckedIcon, CheckBoxBlankIcon} from "../../../../../../assets/icons";

// style
import style from './item.module.css';

interface IProps {
    title: string,
    done: boolean
}

const Item: FC<IProps> = (props) => {
    return (
        <li className={style.root}>
            <span>{props.title}</span>
            {props.done ? <img src={CheckBoxCheckedIcon} className={style.icon} alt=""/> : <img src={CheckBoxBlankIcon} className={style.icon} alt=""/>}
        </li>
    );
};

export {Item};
