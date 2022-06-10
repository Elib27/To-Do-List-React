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
    font-weight: 400;
    margin: 20px 0;
    position: relative;
    color: ${colors.primary};
    &::after{
        content: 'To Do List';
        width: 100%;
        position: absolute;
        top: -1.5px;
        left : -1.5px;
        color: #0d0d0d;
    }
`

const TaskList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 60px 0;
`

function ToDoList(){

    const [taskList, setTaskList] = useState({
        1: {content: "Ceci est une tâche 1", checked: false},
        2: {content: "Ceci est une tâche 2", checked: true}
    })

    const [taskCounter, setTaskCounter] = useState(3)
    const [newTaskText, setNewTaskText] = useState('')

    function toogleCheck(id){
       const newCheck = !(taskList[id]['checked'])
        setTaskList({...taskList, [id]: {...taskList[id], checked : newCheck}})
    }

    function createNewTask(taskContent){
        setTaskList({...taskList, [taskCounter]: {content: taskContent, checked:false}})
        setNewTaskText('')
        setTaskCounter(taskCounter + 1)
    }

    useEffect(() => console.log(taskList), [taskList])

    return(
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
                        />
                    )
                })}
            </TaskList>
        </ToDoListContainer>
    )
}


export default ToDoList