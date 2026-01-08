const StudentForm = ({ createStudent, handleInputChange, newStudent
}) => {
  return (
          <div className="registration">
        <form onSubmit={createStudent}>
          <h1>Student Registration</h1>
          <div className="form-group">
            <label htmlFor="studentName">Full Name</label>
          <input
            type="text"
            name="name"
            id="studentName"
            required
            placeholder='e.g John Doe'
            value={newStudent.name}
            onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentLrn">Learner's Reference Number</label>
          <input
            type="text"
            name="lrn"
            id="studentLrn"
            required
            inputMode='numeric'
            pattern='[0-9]*'
            placeholder='12-digit LRN'
            value={newStudent.lrn}
            onChange={handleInputChange}
          />
          </div>
          <div className="form-group">
            <label htmlFor="studentEmail">Email Address</label>
          <input
            type="email"
            name="email"
            id="studentEmail"
            required
            placeholder='user@example.com'
            value={newStudent.email}
            onChange={handleInputChange}
          />
          </div>
          <div className="form-group">
            <label htmlFor="studentCourse">Course/Program</label>
          <select
            name="course"
            id="studentCourse"
            required
            value={newStudent.course}
            onChange={handleInputChange}
          >
            <option value="" disabled>-- Select a course --</option>
            <option value="BSIT">BS Information Technology</option>
            <option value="BSC">BS Criminology</option>
            <option value="BSA">BS Accountancy</option>
            <option value="BSED">BS Education</option>
            <option value="BSHM">BS Hospitality Management</option>
          </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="studentPassword"
            required
            placeholder='Must have atleast 8 characters'
            value={newStudent.password}
            onChange={handleInputChange}
          />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
  )
}

export default StudentForm