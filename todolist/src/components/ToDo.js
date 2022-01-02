import React, { useState } from 'react';
import styled from 'styled-components';
import deleteIcon from "../img/delete-icon.png";
import editIcon from "../img/edit-icon.png"

const List = styled.section`
    text-align: start;
    width: 96%;
    height: 40%;
    max-height: 40%;
    overflow: auto;
`

const ListTitle = styled.h2`
    color:#006a6a;
`

const ListItem = styled.section`
    width:100%;
    height: 25%;
    display: flex;
    justify-content: space-between;
`

function ToDo(props) {
    const [edit, setEdit] = useState({taskToBeEdited: "", willEdit: false})
    const [editInput, setEditInput] = useState("")

    const onChangeEditInput = (e) => {
        setEditInput(e.target.value)
    }

    const editTask = (id) => {
        const updatedList = props.toDoList.map(task => {
            if(task.id === id) {
                const updatedTask = {
                    ...task,
                    name: editInput
                }
                return updatedTask
            } else {
                return task
            }
        })

        props.setToDoList(updatedList)
        localStorage.setItem("tasks", JSON.stringify(updatedList))
        setEdit({taskToBeEdited: "", willEdit: false})
        setEditInput("")
    }

    return (
        <List>
            <ListTitle>A FAZER</ListTitle>
            {props.toDoList.map(task => {
                if (task.done === false) {
                    return (
                        <ListItem>
                            <div>
                            <input type={"checkbox"} id={task.name} onClick={() => props.checkTask(task.id)} />
                            <label for={task.name}>{task.name}</label>
                            </div>
                            <div>
                            <input type={"image"} src={editIcon} onClick={() => { setEdit({taskToBeEdited: task.id, willEdit: !edit.willEdit}) }}></input>
                            <input type={"image"} src={deleteIcon} onClick={() => props.deleteTask(task.id)} />
                            </div>
                        </ListItem>
                    )
                }
            })}
            {edit.willEdit ?
                <section>
                    <input type={"text"} value={editInput} onChange={onChangeEditInput} /> 
                    <button onClick={() => editTask(edit.taskToBeEdited)}>Confirmar</button>
                </section> :
                null
            }

        </List>
    );
};

export default ToDo;