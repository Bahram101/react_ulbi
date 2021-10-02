import React, {useState} from 'react'

const Counter = () => {

    const [count, setCounter] = useState(0)

	const increment = ()=>{
		setCounter(count + 1)
	}

	const decrement = ()=>{
        if(count > 0){
            setCounter(count - 1)
        }
		
	}


    return (
        <div className='App'>
			<h1>{count}</h1>
			<button onClick={decrement}>Decrement - </button>
			<button onClick={increment}>Increment + </button>
		</div>
    )
}

export default Counter
