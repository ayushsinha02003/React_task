import './App.css';
import UserInfoValidationForm from './Components/UserInfoValidationForm';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div>
    <div className="sidebarContainer">
    <SideBar/>
    </div>
    <div className="formContainer">
    <UserInfoValidationForm/>
    </div>
    </div>
  )
}

export default App;
