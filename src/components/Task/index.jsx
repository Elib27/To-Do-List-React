import styled from 'styled-components'
import colors from '../../utils/colors'
import editLogo from '../../assets/edit.svg'
import trashLogo from '../../assets/trash.svg'
import checkedLogo from '../../assets/checked.svg'

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
`


function Task({ checked, taskText }) {

    return(
        <TaskContainer checked={checked}>
            <CheckBox checked={checked}>
                { checked && <CheckedBox src={checkedLogo}/> }
            </CheckBox>
            <TaskContent checked={checked}>{ taskText }</TaskContent>
            <ButtonsWrapper>
                <EditButton src={editLogo} checked={checked}/>
                <TrashButton src={trashLogo} checked={checked}/>
            </ButtonsWrapper>
        </TaskContainer>
    )
}


export default Task