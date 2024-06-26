import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todoSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const AddNewTask = () => {

	const [todo, setTodo] = useState("") // State to hold the new task input

	const dispatch = useDispatch() // Hook to dispatch actions
	const navigate = useNavigate() // Hook to navigate between routes

	function handleSubmit(e) {
		e.preventDefault() // Prevent default form submission behavior
		try {
			if (todo.trim()) { // Check if the input is not just whitespace
				dispatch(addTodo({
					id: Date.now(), // simple unique id generator
					text: todo,
					completed: false
				}))
				setTodo("") // clear input after submission
				navigate('/viewtask') // navigate to all todos page
				toast.success('Todo added successfully') // Show success message
			}
		} catch (error) {
			toast.error("Something went wrong") // Show error message
		}
	}
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Add a new Task
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div>
						<div className="mt-2">
							<input
								id="task"
								name="task"
								type="text"
								required
								placeholder="Enter new task"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								value={todo}
								onChange={(e) => setTodo(e.target.value)} // Update state on input change
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Add
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddNewTask