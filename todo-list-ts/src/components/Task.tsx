import styles from './Task.module.css';
import { Trash, CheckCircle, Circle } from 'phosphor-react';

export interface TaskProps {
    id: string,
    text: string,
    done: Boolean,
    onDoneTask?: (task: string) => void
    onDeleteTask?: (task: string) => void
}

export function Task({ id, text, done = false, onDoneTask, onDeleteTask }: TaskProps) {

    function handleDoneTask() {
        onDoneTask!(id);
    }

    function handleDeleteTask() {
        onDeleteTask!(id);
    }

    return (
        <div className={done ? styles.doneTask : styles.pendingTask}>
            <div 
                className={styles.task}
                onClick={handleDoneTask}
                id={id} >
                {done ?
                    <CheckCircle
                        size={24}
                        className={styles.checkedIcon}
                    />
                    :
                    <Circle
                        size={24}
                        className={styles.uncheckedIcon}
                    />
                }
                <p>
                    {text}
                </p>
            </div>
            <Trash
                size={18}
                className={styles.deleteIcon}
                onClick={handleDeleteTask}
            />
        </div>
    )
}