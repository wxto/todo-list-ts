import styles from './AddTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { FormEvent, ChangeEvent, InvalidEvent, useState } from 'react';
import { TaskProps } from './Task';

interface InputTask {
    tasks: TaskProps[]
    onCreateNewTask: (taskItem: TaskProps[]) => void;
}

export function AddTask({ tasks, onCreateNewTask }: InputTask) {
    const [newTask, setNewTask] = useState('');

    function handleNewTaskChanged(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function handleAddTask(event: FormEvent) {
        event.preventDefault();

        const createdTask: TaskProps = {
            id: newTask,
            text: newTask,
            done: false
        }

        onCreateNewTask([createdTask, ...tasks]);
        setNewTask('');
    }

    function handleInputValidate(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Digite a descrição da tarefa");
    }

    return (
        <div className={styles.addTask}>
            <form className={styles.addTaskForm} onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    className={styles.inputAddTask}
                    name="search"
                    value={newTask}
                    onChange={handleNewTaskChanged}
                    onInvalid={handleInputValidate}
                    required
                />
                <button type="submit" className={styles.addTaskButton}>
                    Criar <PlusCircle size={15} />
                </button>
            </form>
        </div>
    )
}