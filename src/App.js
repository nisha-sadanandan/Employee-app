
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/login/logins';
import './styles/login.css';
import './styles/EmployeeDashboard.css';
import './styles/AddEmployeeForm.css';
import EmployeeDashboard from './components/Employees/EmployeeDashboard';
import AddEmployeeForm from './components/Employees/AddEmployeeForm';
import { EmployeeProvider } from './components/Employees/EmployeeContext';



function App() {
  return (
    <EmployeeProvider>
    <Router>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Employee' element={<EmployeeDashboard/>}></Route>
      <Route path='/addemployee' element={<AddEmployeeForm/>}></Route>
     </Routes>
    </Router>
    </EmployeeProvider>  
  );
} 

export default App;
