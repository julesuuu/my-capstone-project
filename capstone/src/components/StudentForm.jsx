const StudentForm = ({createStudent, newStudentName, handleStudentName}) => {
  return (
          <div className="registration">
        <form onSubmit={createStudent}>
          <h1>Student Registration</h1>
          <div className="form-group">
            <label htmlFor="studentName">Full Name</label>
          <input
            type="text"
            name="studentName"
            id="studentName"
            required
            value={newStudentName}
            onChange={handleStudentName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input type="text" name="studentId" id="studentId" required />
          </div>
          <div className="form-group">
            <label htmlFor="studentEmail">Email Address</label>
            <input type="email" name="studentEmail" id="studentEmail" required />
          </div>
          <div className="form-group">
            <label htmlFor="studentCourse">Course/Program</label>
            <input type="text" name="studentCourse" id="studentCourse" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
  )
}

export default StudentForm