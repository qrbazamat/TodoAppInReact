import React from 'react'
import { useDispatch } from 'react-redux'
import { IconButton } from '@material-ui/core';
import {
    deleteValue,
    doNotValue
} from '../../redux/actions';

import {
    Input,
    ListGroupItem,
} from 'reactstrap'

import {
    Delete,
    Edit,
    MoreVert
} from '@material-ui/icons'

function Index({
        index,
        edit, 
        title, 
        isDone, 
        editOpenModal, 
        setOpenMenu, 
        openMenu }) {
    const dispatch = useDispatch()

    const handleDeleteValue = () => {
        deleteValue(dispatch, index)
        setOpenMenu(-1)
    }

    const handleEditOpenModal = () => {
        editOpenModal(index)
        setOpenMenu(-1)
    }

    const editStyle = edit.id === index ? 'bg-secondary text-warning' : '';
    const overLine = isDone ?
        { textDecoration: 'line-through', opacity: '0.6' } : {}

    return (
        <ListGroupItem
            action
            className={editStyle}
            style={{
                cursor: 'pointer',
                position: 'relative',
            }}
        >
            <label
                htmlFor={`check${index}`}
                className={`
                            d-flex
                            align-items-center
                            justify-content-between
                        `}
            >
                <div>
                    <Input
                        type='checkbox'
                        id={`check${index}`}
                        checked={isDone}
                        onChange={() => doNotValue(dispatch, index)}
                    />
                    <span
                        style={overLine}
                        className='px-3'
                    >
                        {index + 1}. {title}
                    </span>
                </div>


                <div
                    style={{
                        position: 'absolute',
                        right: '0',
                        top: '0',
                        bottom: '0',
                        transition: 'width .5s',
                        overflow: 'hidden',
                        width: openMenu?'180px':'0px'
                    }}
                    className='shadow d-flex align-items-center bordered'
                >
                    <IconButton
                        onClick={handleEditOpenModal}
                        className='bg-warning text-white mx-2'
                    >
                        <Edit />
                    </IconButton>
                    <IconButton
                        onClick={handleDeleteValue}
                        className='bg-danger text-white'
                    >
                        <Delete />
                    </IconButton>
                </div>
                <IconButton
                    onClick={() => setOpenMenu(index, !openMenu)}
                >
                    <MoreVert />
                </IconButton>
            </label>
        </ListGroupItem>
    )
}

export default Index