import { useEffect ,useState } from 'react'
import StudentForm from './components/StudentForm'
import studentRegistation from './services/students'
import './styles.css'

const App = () => {
  const [student, setStudent] = useState([])
  const [newStudent, setNewStudent] = useState({
    name: '',
    lrn: '',
    email: '',
    course: '',
    password: '',
  })
  
  useEffect(() => {
    studentRegistation
      .getAll()
      .then(initialStudent => {
        console.log('students:', initialStudent)
        setStudent(initialStudent)
      })
  }, [])

  const createStudent = (event) => {
    event.preventDefault()

    const isDuplicate = student.some(s => s.lrn === newStudent.lrn )

    if (isDuplicate) {
      alert(`Student with LRN '${newStudent.lrn}' is already registered!`)
      return
    }

    studentRegistation
      .create(newStudent)
      .then((returnedStudent) => {
        setStudent(student.concat(returnedStudent))
        
        setStudent({
          name: '',
          lrn: '',
          email: '',
          course: '',
          password: '',
        })
        console.log('Successfully Registered:', returnedStudent)
      })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    
    setNewStudent({
      ...newStudent,
      [name]: value
    })
  }

  return (
    <div>
      <StudentForm
        createStudent={createStudent}
        handleInputChange={handleInputChange}
        newStudent={newStudent}
      />
    </div>
  )
}

export default App
