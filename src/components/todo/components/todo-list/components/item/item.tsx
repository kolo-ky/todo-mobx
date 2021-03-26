import React, {FC} from 'react';

// style
import style from './item.module.css';

interface IProps {
    title: string
}

const Item: FC<IProps> = (props) => {
    return (
        <li className={style.root}>
            {props.title}
        </li>
    );
};

export {Item};
