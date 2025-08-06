function ToDo({ task, title, togglePopUp }) {
	return (
		<>
			<div className="h-auto max-w-lg mx-auto bg-blue-100 shadow-md rounded-lg p-6 my-4">
				<h2>{title}</h2>
				<p>{task}</p>
				<button onClick={() => togglePopUp()} className="border rounded-lg py-2 px-8 mt-4 bg-blue-400">Delete</button>
			</div>
		</>

	)
}

export default ToDo;