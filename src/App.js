
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes } from "react-router-dom"
import NavList from './components/NavList';
import UserList from './components/userList';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/users' element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
