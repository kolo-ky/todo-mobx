import React, {useEffect, useState} from 'react';

// styles
import style from './assets/common-styles.module.css';

// components
import {Todo} from "./components/todo";

// types
import {ITasks} from "./interfaces/tasks.interface";

import {getTasks} from "./api/tasks/tasks";

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  useEffect(() => {
    getTasks().then((resp) => {
      setTasks(resp.data);
    });
  }, [setTasks]);

  return (
    <section className={style.root}>
      <Todo tasks={tasks}/>
    </section>
  );
}

export default App;
