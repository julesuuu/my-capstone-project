import { useEffect ,useState } from 'react'
import StudentForm from './components/StudentForm'
import studentRegistation from './services/students'
import './styles.css'

const App = () => {
  const [student, setStudent] = useState([])
  const [newStudentName, setNewStudentName] = useState('')
  
  useEffect(() => {
    studentRegistation
      .getAll()
      .then(initialStudent => {
        setStudent(initialStudent)
      })
  }, [])

  const createStudent = (event) => {
    event.preventDefault()
    const studentObject = {
      studentName: newStudentName
    }

    studentRegistation
      .create(studentObject)
      .then((returnedStudent) => {
        setStudent(student.concat(returnedStudent))
        setNewStudentName('')
      })
  }

  const handleStudentName = (event) => {
    setNewStudentName(event.target.value)
    console.log('event', event.target.value)
  }

  return (
    <div>
      <StudentForm
        createStudent={createStudent}
        newStudentName={newStudentName}
        handleStudentName={handleStudentName}
      />
    </div>
  )
}

export default App
