import { useState } from 'react'
import './App.css'
import { useTodo } from './store'

function App() {
  const [input, setInput] = useState('')
  const todoItems = useTodo((store) => store.tasks)
  const addTask = useTodo((store) => store.addTask)
  const removeTask = useTodo((store) => store.removeTask)

  const handleClick = () => {
    if (!input.trim()) return
    addTask(input.trim())
    setInput('')
  }
  return (
    <div className='container'>
      <div className='wrapper'>
        <div>
          <input value={input} onChange={(e) => { setInput(e.target.value) }} />
          <button onClick={handleClick}>Create</button>
        </div>

        <ul className='list'>
          {
            todoItems.map((value, key) => {
              return (
                  <li key={key}>
                    {value}

                    <button onClick={() => { removeTask(value) }}>remove</button>

                  </li>

              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
