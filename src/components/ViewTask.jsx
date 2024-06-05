import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completed, deleteTodo } from '../features/todoSlice'
import { toast } from 'react-toastify'
import { MdDelete } from "react-icons/md"
import { FaCheck } from "react-icons/fa6"
import { ImCross } from "react-icons/im"

const ViewTask = () => {

    const dispatch = useDispatch() // Hook to dispatch actions

    const { todos } = useSelector(state => state.todo) // Accessing todos from the Redux store

    function handleDelete(id) {
        dispatch(deleteTodo({ id })) // Dispatching action to delete a todo
        toast.warning('Todo deleted successully') // Displaying a toast message on deletion
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
                                <p className={`py-2 text-gray-700 ${todo.completed && 'line-through'}`}>{todo.text}</p> {/* Conditional styling based on todo completion */}
                            </div>
                            <div className="flex gap-4 mt-4">
                                <button
                                    onClick={() => [dispatch(completed(todo.id)), toast.info(`Todo marked as ${todo.completed ? 'Undone' : 'Done'}`)]} // Toggling todo completion and showing toast message
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex gap-2 items-center">
                                    Mark as {todo.completed ? 'Undone' : 'Done'}
                                    <span>
                                        {todo.completed ? <ImCross/> : <FaCheck/>} {/* Displaying appropriate icon based on completion status */}
                                    </span>
                                </button>
                                <button
                                    onClick={() => handleDelete(todo.id)} // Handling delete operation
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex gap-2 items-center">
                                    Delete
                                    <span>
                                        <MdDelete /> {/* Icon for delete button */}
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))
                    :
                    <h1 className='text-3xl font-semibold text-center mt-8'>No Todos added</h1> // Display message when no todos are present
            }
        </div>
    )
}

export default ViewTask