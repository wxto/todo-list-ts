import { useState } from 'react';
import styles from './TaskList.module.css';
import { ClipboardText } from 'phosphor-react';
import { Task, TaskProps } from './Task';
import { AddTask } from './AddTask'

const InitialTasks: TaskProps[] = [
    {
        id: '1',
        text: "Integer urna interdum massa libero auctor"
            + "neque turpis turpis semper. Duis vel sed fames integer.",
        done: false
    },
    {
        id: '2',
        text: "Integer urna interdum massa libero auctor"
            + "neque turpis turpis semper. Duis vel sed fames integer.",
        done: false
    },
    {
        id: '3',
        text: "Integer urna interdum massa libero auctor"
            + "neque turpis turpis semper. Duis vel sed fames integer.",
        done: false
    },
    {
        id: '4',
        text: "Integer urna interdum massa libero auctor"
            + "neque turpis turpis semper. Duis vel sed fames integer.",
        done: true
    }
]



export function TaskList() {
    const [taskList, setTaskList] = useState(InitialTasks);

    function handleDoneTask(id: string) {
        const newTaskList = taskList.map(
            (taskItem) => {
                if (taskItem.id === id) {
                    taskItem.done = !taskItem.done;
                }
                return taskItem
            }
        )
        setTaskList(newTaskList);
    }

    function handleDeleteTask(id: string) {
        const newTaskList = taskList.filter(
            (taskItem) => { return taskItem.id !== id }
        )
        setTaskList(newTaskList);
    }

    return (
        <main className={styles.taskList}>
            <AddTask tasks={taskList} onCreateNewTask={setTaskList} />
            <div className={styles.taskContent}>

                <div className={styles.statusBar}>
                    <div className={styles.statusBarItem}>
                        <a className={styles.createdTasks}>
                            Tarefas criadas
                        </a>
                        <span>{taskList.length}</span>
                    </div>
                    <div className={styles.statusBarItem}>
                        <a className={styles.finishedTasks}>
                            Concluidas
                        </a>
                        <span>
                            {
                                taskList.reduce(
                                    (total, elemento) => {
                                        return elemento.done ? total += 1 : total;
                                    }
                                    , 0)
                            }
                            {' de '} {taskList.length}
                        </span>
                    </div>
                </div>

                <div className={styles.taskListBox}>
                    {taskList.length > 0 ?
                        taskList.map(
                            TaskItem => {
                                return <Task
                                    key={TaskItem.id}
                                    id={TaskItem.id}
                                    text={TaskItem.text}
                                    done={TaskItem.done}
                                    onDoneTask={handleDoneTask}
                                    onDeleteTask={handleDeleteTask} />
                            }
                        )
                        :
                        <div className={styles.emptyTaskList}>
                            <ClipboardText size={56} />
                            <b>Você ainda não tem tarefas cadastradas</b>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    }
                </div>

            </div>
        </main>

    )
}