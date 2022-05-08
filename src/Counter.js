import React, {useState} from 'react'

function Counter(props) {

 const [count, setCount ] = useState(0);

  return (
      
    <div>
        <h2>{props.title}</h2>
        <p>Mon etat local Count contient la valeur: <span>{count}</span></p>
        <button className='myButton' onClick={() => setCount(count-1)}>-</button>
        <button className='myButton' onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}

export default Counter