import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function countOnClick() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="card">
      <button onClick={countOnClick}>
        count is {count}
      </button>
    </div>
  )
}

export default App;
