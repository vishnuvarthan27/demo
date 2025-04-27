import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [regno, setRegno] = useState('')
  const [cgpa, setCGPA] = useState('0.0')
  const [dept, setDept] = useState('')


  const saveStudent = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/savestudent',
        { name, regno, cgpa, dept })
      alert(response.data.message)
    }
    catch (err) {
      alert(err)
    }
  }

  return (
    <div>
      <h1>Save Student Details</h1>
      <form onSubmit={saveStudent}>
        <div>
          <label>Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <br />
          <label>Regno:</label>
          <input type="number" onChange={(e) => setRegno(e.target.value)} />
          <br />
          <label>CGPA:</label>
          <input type="number" onChange={(e) => setCGPA(e.target.value)} />
          <br />
          <label>Dept:</label>
          <input type="text" onChange={(e) => setDept(e.target.value)} />
          <br />
          <br />
          <button>Save Student </button>
        </div>
      </form>
    </div>

  )
}

export default App
