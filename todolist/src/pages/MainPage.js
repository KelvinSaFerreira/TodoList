import React, { useState, useEffect } from 'react';
import ToDo from '../components/ToDo';
import Done from '../components/Done';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    padding-top: 8vh;
    background-color: #f5f5f5;
    height: 100%;
`

const UsefulDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Input = styled.input`
    width: 80%;
    border: none;
    padding: 2.5vh 2.5vw;
    border-radius: 4px;
    color: grey;
    font-size: large;
    margin: 0;
`

const Button = styled.button`
    background-color: #36afd1;
    color: white;
    border: none;
    padding: 1vh 2vw;
    font-size: large;
    font-weight: bolder;
    border-radius: 4px;
`

function MainPage() {
    const [toDoList, setToDoList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const createTask = () => {
        const task = {
            id: Date.now(),
            name: inputValue,
            done: false
        }

        setToDoList([...toDoList, task])
        setInputValue("")
        localStorage.setItem("tasks", JSON.stringify([...toDoList, task]))
    }

    const checkTask = (id) => {
        const updatedList = toDoList.map(task => {
            if (task.id === id) {
                const updatedTask = {
                    ...task,
                    done: !task.done
                }

                return updatedTask
            } else {
                return task
            }
        })

        setToDoList(updatedList)
        localStorage.setItem("tasks", JSON.stringify(updatedList))
    }

    const deleteTask = (id) => {
        const updatedList = toDoList.filter(task => {
            if (task.id === id) {
                return false
            } else {
                return true
            }
        })

        setToDoList(updatedList)
        localStorage.setItem("tasks", JSON.stringify(updatedList))
    }

    useEffect(() => {

        const savedTasks = localStorage.getItem("tasks")

        if (savedTasks) {
            setToDoList(JSON.parse(savedTasks))
        }
    }, [])

    return (
        <Main>

            <UsefulDiv>
                <Input type="text" value={inputValue} onChange={onChangeInput} placeholder='Digite aqui uma nova tarefa...'/>
                <Button onClick={() => createTask()}>ADICIONAR</Button>
            </UsefulDiv>

            <ToDo
                inputValue={inputValue}
                onChangeInput={onChangeInput}
                toDoList={toDoList}
                setToDoList={setToDoList}
                checkTask={checkTask}
                deleteTask={deleteTask}
            />

            <Done
                toDoList={toDoList}
                checkTask={checkTask}
                deleteTask={deleteTask}
            />
        </Main>
    );
};

export default MainPage;