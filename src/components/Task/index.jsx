import styled from 'styled-components'
import colors from '../../utils/colors'
import editLogo from '../../assets/edit.svg'
import trashLogo from '../../assets/trash.svg'
import whiteCheckedLogo from '../../assets/checked.svg'
import blueCheckedLogo from '../../assets/blueChecked.svg'
import { useState } from 'react'

const TaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    background: ${colors.taskBackGround};
    width: 80%;
    margin-bottom: 30px;
    border-radius: 8px;
    overflow: hidden;
    ${({checked}) => !checked && 'box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25)'};
`

const TaskContent = styled.p`
    margin: 0;
    color : #4F4F4F;
    padding-left: 20px;
    font-size: 16px;
    width: 100px;
    width: 80%;
    line-height: 45px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
    ${({checked}) => {
        if (checked) {
            return (
                'text-decoration: line-through;' +
                'color: #a5a5a5'
            )
    }}}
`

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`

const EditButton = styled.img`
    height: 24px;
    cursor: pointer;
    margin : 0 8px 0 20px;
    ${({checked}) => {
        if (checked) {
            return (
                "filter: grayscale(0.9);" + 
                "opacity: 0.6;" +
                "text-decoration: line-through;" +
                "cursor: auto;"
            )
    }}}
    `

const DoneEditingButton = styled.img`
    height: 22px;
    margin-right: 8px;
    cursor: pointer;
`

const TrashButton = styled.img`
    height: 26px;
    cursor: pointer;
    margin : 0 20px 0 8px;
    ${({checked}) => {
        if (checked) {
            return (
                "filter: grayscale(0.9);" + 
                "opacity: 0.6;" +
                "text-decoration: line-through;" +
                "cursor: auto;"
            )
    }}}
`

const CheckBox = styled.div`
    box-sizing: border-box;
    padding: 2px;
    margin: 0 0 0 20px;
    height: 22px;
    width: 22px;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid #D9D9D9;
    background-color: ${colors.backGround};
    cursor: pointer;
    ${({checked}) => {
        if (checked){
            return (
                "background: " + colors.primary + ";" +
                "border: 1px solid" + colors.primary + ";"
            )
        }
    }}
`

const CheckedBox = styled.img`
    height: 80%;
    user-select: none;
`

const EditTextInput = styled.input.attrs({
    type : 'text'
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


function Task({ checked, taskText, id, toogleCheck, deleteTask}) {

    const [editMode, setEditMode] = useState(false)
    const [editedText, setEditedText] = useState("")

    let taskContent = taskText

    function editText(){
        setEditMode(true)
        setEditedText(taskText)
    }

    function updateTask(){
        setEditMode(false)
        taskContent = editedText
    }

    return(
        <TaskContainer checked={checked}>
            <CheckBox
                checked={checked}
                onClick={() => toogleCheck(id)}
            >
                { checked && <CheckedBox src={whiteCheckedLogo}/> }
            </CheckBox>
            { editMode ? (
                    <EditTextInput value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                ):(
                    <TaskContent checked={checked}>{ taskContent }</TaskContent>
                )
            }
            <ButtonsWrapper>
                { editMode ? (
                        <DoneEditingButton src={blueCheckedLogo} onClick={() => updateTask()} />
                    ):(
                        <EditButton src={editLogo} checked={checked} onClick={() => editText()}/>
                    )
                }
                <TrashButton src={trashLogo} checked={checked} onClick={() => deleteTask(id)}/>
            </ButtonsWrapper>
        </TaskContainer>
    )
}


export default Task