import React, {FC} from 'react';

import style from './app-header.module.css';

const AppHeader: FC = () => {
    return (
        <div className={style.root}>
            todo app
        </div>
    );
};

export {AppHeader};
