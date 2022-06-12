import styled from 'styled-components'
import colors from '../../utils/colors'
import addLogo from '../../assets/add.svg'

const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
    height: 45px;
    border-radius: 23px;
    width: 80%;
    overflow: hidden;
`

const InputBar = styled.input.attrs({
    type : 'text',
    placeholder: 'Add a task...',
    })`
    height: 100%;
    width: 100%;
    padding-left: 20px;
    color: #4F4F4F;
    background: ${colors.taskBackGround};
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: #B4B4B4;
    }
    :-ms-input-placeholder {
     color: #B4B4B4;
    }
    &:focus{
        outline: 0;
    }
`

const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 60px;
    background: -webkit-linear-gradient(140deg, #409FF8, #75aee0);
    cursor: pointer;
`

const AddButtonLogo = styled.img`
    height: 28px;
    width: 28px;
    padding-right: 2px;
`

function CreateTaskBar({newTaskText, setNewTaskText, createNewTask}){

    function updateTaskList(newTaskText){
        let inputBar = document.querySelector('.InputBar')
        if(inputBar.value !== ''){
            createNewTask(newTaskText)
            inputBar.value = '';
        }
        else {
            alert("❌ You can't create an empty task ❌")
        }
    }

    function createTaskBarOnEnter(key){
        if(key === 'Enter'){
            updateTaskList(newTaskText)
        }
    }

    return (
        <Container>
            <InputBar
                className="InputBar"
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyPress={(e) => createTaskBarOnEnter(e.key)}
            />
            <AddButton onClick={() => updateTaskList(newTaskText)}>
                <AddButtonLogo src={addLogo} />
            </AddButton>
        </Container>
    )
}

export default CreateTaskBar