import styled from 'styled-components'
import colors from '../../utils/colors'
import Task from '../Task/index'
import CreateTaskBar from '../CreateTaskBar'
import { useState, useEffect } from 'react'

const ToDoListContainer = styled.div`
    min-height: 80vh;
    width: min(95vw, 550px);
    background: ${colors.backGround};
    box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    margin: 60px 0;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    font-size: 2rem;
    font-weight: 500;
    margin: 40px 0 30px 0;
    position: relative;
    background: -webkit-linear-gradient(140deg, #409FF8, #8AC2F4);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`

const TaskList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 60px 0;
`

function ToDoList() {

    const [taskList, setTaskList] = useState({
        1: { content: "This is a task to do", checked: false },
        2: { content: "This is a done task", checked: true }
    })

    const [taskCounter, setTaskCounter] = useState(3)
    const [newTaskText, setNewTaskText] = useState('')

    function toogleCheck(id) {
        const newCheck = !(taskList[id]['checked'])
        setTaskList({ ...taskList, [id]: { ...taskList[id], checked: newCheck } })
    }

    function createNewTask(taskContent) {
        setTaskList({ ...taskList, [taskCounter]: { content: taskContent, checked: false } })
        setNewTaskText('')
        setTaskCounter(taskCounter + 1)
    }

    function deleteTask(taskId) {
        const newTakList = {...taskList}
        delete newTakList[taskId]
        setTaskList(newTakList)
    }

    useEffect(() => console.log(taskList), [taskList])

    return (
        <ToDoListContainer>
            <Header>
                <Title>To Do List</Title>
                <CreateTaskBar
                    newTaskText={newTaskText}
                    setNewTaskText={setNewTaskText}
                    createNewTask={createNewTask}
                />
            </Header>
            <TaskList>
                {Object.keys(taskList).map((task) => {
                    return (
                        <Task
                            checked={taskList[task]['checked']}
                            taskText={taskList[task]['content']}
                            id={task}
                            toogleCheck={toogleCheck}
                            deleteTask={deleteTask}
                        />
                    )
                })}
            </TaskList>
        </ToDoListContainer>
    )
}


export default ToDoList