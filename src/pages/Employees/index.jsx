import EmployeeCard from '../../components/EmployeeCard'
import { employeesData } from '../../data/employees'
import './Employees.css'

function Employees() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Nos employés 👥</h1>
        <p>Découvrez l'ensemble de notre équipe.</p>
      </div>

      <div className="employees-container">
        {employeesData.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  )
}

export default Employees
