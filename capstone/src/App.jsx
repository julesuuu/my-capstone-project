import { useEffect ,useState } from 'react'
import StudentForm from './components/StudentForm'
import studentRegistation from './services/students'
import './styles.css'

const App = () => {
  const [student, setStudent] = useState([])
  
  useEffect(() => {
    studentRegistation
      .getAll()
      .then(initialResponse => {
        setStudent(initialResponse)
      })
  }, [])

  return (
    <div>
      <StudentForm />
      console('students', student)
    </div>
  )
}

export default App
