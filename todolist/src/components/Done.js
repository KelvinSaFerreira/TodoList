import React from 'react';
import styled from 'styled-components';
import deleteIcon from "../img/delete-icon.png"

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

function Done(props) {

    return (
        <List>
            <ListTitle>FEITO</ListTitle>
            {props.toDoList.map(task => {
                if (task.done === true) {
                    return (
                        <ListItem>
                            <div>
                            <input type={"checkbox"} id={task.name} onClick={() => props.checkTask(task.id)} checked />
                            <label for={task.name}>{task.name}</label>
                            </div>
                            <input type={"image"} src={deleteIcon} onClick={() => props.deleteTask(task.id)} />
                        </ListItem>
                    )
                }
            })}
        </List>
    );
};

export default Done;