import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ViewTask from './components/ViewTask'
import AddNewTask from './components/AddNewTask'

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<AddNewTask/>}/>
					<Route path='/viewtask' element={<ViewTask/>}/>
				</Routes>
			</main>
		</>
	)
}

export default App
