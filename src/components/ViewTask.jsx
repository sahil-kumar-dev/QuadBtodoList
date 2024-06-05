import React from 'react'

const ViewTask = () => {
    return (
        <div>
            <h1 className='text-center font-semibold text-3xl'>All Tasks</h1>
            <div className="max-w-lg mx-auto mt-10 overflow-hidden bg-white rounded-lg shadow-lg px-6 py-4">
                <div className="">
                    <h1 className="text-xl font-semibold text-gray-800">Task 1</h1>
                    <p className="py-2 text-gray-700">Here is the detail of the task that needs to be viewed.</p>
                </div>
                <div className="flex gap-4 mt-4">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Mark as done</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ViewTask