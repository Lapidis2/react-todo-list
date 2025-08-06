import React from 'react'

function popUp({closePopUp}) {
  return (
	<div className=" fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" onClick={()=>closePopUp()}>
		<div className="py-16 px-20 bg-white p-6 rounded-lg shadow-lg">
			<h2 className="text-lg font-semibold mb-4">Are you sure to delete?</h2>
			<div className="flex justify-center space-x-8 bg">
			<button onClick={()=>{console.log('confirm delete')}} className="bg-blue-300 text-center rounded-md p-2">Confirm</button>
			<button onClick={()=>closePopUp()}  className="bg-blue-300 text-center rounded-md p-2">Cancel</button>
			</div>
		</div>
	 
	</div>
  )
}

export default popUp
