import React from 'react';

// styles
import style from './assets/common-styles.module.css';

// components
import {Todo} from "./components/todo";

// types
import {ITasks} from "./interfaces/tasks.interface";

function App() {
  const tasks: Array<ITasks> = [
    {
      id: 0,
      title: 'Сверстать Todo проект на React',
      done: false
    },
    {
      id: 1,
      title: 'Опубликовать проект на GitHub',
      done: false
    }
  ];

  return (
    <section className={style.root}>
      <Todo tasks={tasks}/>
    </section>
  );
}

export default App;
