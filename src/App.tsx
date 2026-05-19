import './App.css'
import CreateEmployee from './components/CreateEmployee'
import Home from './components/Home'
import ViewEmployee from './components/ViewEmployee'
import UpdateEmployee from './components/UpdateEmployee'
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {


  return (
    <main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/employee/view/:id" element={<ViewEmployee />} />
        <Route path="employee/update/:id" element={<UpdateEmployee />} />
      </Routes>
    </main>
  );
}

export default App
