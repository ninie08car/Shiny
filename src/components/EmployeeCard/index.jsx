import './EmployeeCard.css'

function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <img
        src={employee.avatar}
        alt={employee.name}
        className="employee-avatar"
      />
      <div className="employee-info">
        <h3>{employee.name}</h3>
        <p className="employee-position">{employee.position}</p>
        <p className="employee-department">{employee.department}</p>
      </div>
    </div>
  )
}

export default EmployeeCard
