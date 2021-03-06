import React from 'react'
import { Provider } from 'react-redux'
import Todo from './Todo'
import store from '../../redux/store'


function Index() {
    return (
        <Provider store={store}>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-sm-10 col-md-8 col-lg-6'>
                        <Todo />
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default Index