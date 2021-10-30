import React, { useState } from 'react'
import {
    Button,
    Input,
    ListGroup,
    Modal,
    ModalBody,
    ModalFooter
} from 'reactstrap'
import ListGroupItem from '../ListGroupItem'
import {
    Add,
    DeleteSweep,
    SwapVert,
    Sort
} from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
    addValue,
    deleteAllValues,
    filterValue,
    reverseValues,
    setValue,
    sortValues
} from '../../redux/actions';

const initialStateModal = {
    isEdit: false,
    id: null,
    value: ''
}

function Todo() {
    const data = useSelector(state => state.tasks);
    const value = useSelector(state => state.value);
    const filter = useSelector(state => state.filter);
    const [edit, setEdit] = useState(initialStateModal)
    const [openMenu, setOpenMenu] = useState((new Array(data.length).fill(false)))
    const dispatch = useDispatch()

    localStorage.setItem('tasks', JSON.stringify(data))


    // Set Open Menu
    const handleSetOpenMenu = (index, value) => {
        const allOpenMenu = (new Array(openMenu.length).fill(false))
        if (index !== -1)
            allOpenMenu[index] = value
        setOpenMenu(allOpenMenu)
    }

    // Filter tasks
    const filterTasks = event => filterValue(dispatch, event.target.value)

    // Reverse data
    const reverseTasks = () => reverseValues(dispatch)

    // Delete All
    const deleteAll = () => deleteAllValues(dispatch)

    // Sort data
    const sortTasks = () => sortValues(dispatch)

    // Edit Open Modal
    const editOpenModal = id => {
        setEdit({
            isEdit: true,
            id,
            value: data[id].title
        })
    }

    // Onchange Modal Input
    const onChangeModalInput = event => {
        const editValue = { ...edit }
        editValue.value = event.target.value
        setEdit(editValue)
    }

    // Update Data
    const updateData = () => {
        setEdit(initialStateModal)
        const action = {
            type: 'UPDATE',
            id: edit.id,
            payload: edit.value
        }

        dispatch(action)
    }

    return (
        <div className='bg-white rounded p-3 shadow'>
            <h1>Todo App</h1>

            <div className='d-flex mb-3'>
                <Input
                    value={value}
                    placeholder='new task'
                    className='me-2'
                    onChange={e => setValue(dispatch, e.target.value)}
                    autoFocus
                />
                <Button
                    color='primary'
                    onClick={() => addValue(dispatch, value)}
                >
                    <Add />
                </Button>
            </div>

            <div className='d-flex my-2 justify-content-between px-3'>
                <select
                    className='px-2'
                    value={filter}
                    onChange={filterTasks}
                >
                    <option value='all'>all</option>
                    <option value='done'>done</option>
                    <option value='dont'>don't</option>
                </select>

                <Button
                    color='warning'
                    onClick={reverseTasks}
                >
                    <SwapVert />
                </Button>

                <Button
                    color='success'
                    onClick={sortTasks}
                >
                    <Sort />
                </Button>

                <Button
                    color='danger'
                    onClick={deleteAll}
                >
                    <DeleteSweep />
                </Button>
            </div>

            <ListGroup>
                {data?.map(({ title, isDone }, index) => {
                    const fltr = filter === 'all' ? isDone : filter === 'done' ? true : false

                    return fltr !== isDone ? (null) : (
                        <ListGroupItem
                            key={index}
                            editOpenModal={editOpenModal}
                            edit={edit}
                            title={title}
                            index={index}
                            isDone={isDone}
                            setOpenMenu={handleSetOpenMenu}
                            openMenu={openMenu[index]}
                        />
                    )
                })}
            </ListGroup>

            <Modal isOpen={edit.isEdit}>
                <ModalBody>
                    <Input
                        value={edit.value}
                        onChange={onChangeModalInput}
                        autoFocus
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        color='primary'
                        onClick={updateData}
                    >
                        Update
                    </Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default Todo
