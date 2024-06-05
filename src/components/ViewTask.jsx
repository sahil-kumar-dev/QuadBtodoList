import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completed, deleteTodo } from '../features/todoSlice'
import { toast } from 'react-toastify'

const ViewTask = () => {

    const dispatch = useDispatch()

    const { todos } = useSelector(state => state.todo)

    function handleDelete(id) {
        dispatch(deleteTodo({ id }))
        toast.warning('Todo deleted successully')
    }

    return (
        <div>
            <h1 className='text-center font-semibold text-3xl'>All Todos</h1>
            {
                todos.length > 0 ?
                    todos.map((todo, idx) => (
                        <div className="max-w-lg mx-auto mt-10 overflow-hidden bg-white rounded-lg shadow-lg px-6 py-4">
                            <div className="">
                                <h1 className="text-xl font-semibold text-gray-800">Task {idx + 1}</h1>
                                <p className={`py-2 text-gray-700 ${todo.completed && 'line-through'}`}>{todo.text}</p>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <button
                                    onClick={() => [dispatch(completed(todo.id)), toast.info(`Todo marked as ${todo.completed ? 'Undone' : 'Done'}`)]}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Mark as {todo.completed ? 'Undone' : 'Done'}
                                </button>
                                <button
                                    onClick={() => handleDelete(todo.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete
                                </button>
                            </div>
                        </div>
                    ))
                    :
                    <h1 className='text-3xl font-semibold text-center mt-8'>No Todos added</h1>
            }
        </div>
    )
}

export default ViewTask