import styled from 'styled-components'
import colors from '../../utils/colors'
import Task from '../Task/index'
import CreateTaskBar from '../CreateTaskBar'

const ToDoListContainer = styled.div`
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

    const tasks = []

    for (let i = 2 ; i <= 15 ; i++){
        tasks.push(<Task checked={false} taskText={"important task number " + i.toString()} />)
    }

    tasks.unshift(<Task checked={true} taskText="important task number 1" />)


    return(
        <ToDoListContainer>
            <Header>
                <Title>To Do List</Title>
                <CreateTaskBar />
            </Header>
            <TaskList>
                { tasks }
            </TaskList>
        </ToDoListContainer>
    )
}


export default ToDoList