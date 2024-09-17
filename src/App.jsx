import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import { NavBar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { LogInForm } from './components/auth/LogInForm.jsx';

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          
          <Route path="*" element={<Navigate to="auth" replace/>}/>
          <Route path="auth" index element={<LogInForm/>}/>
          <Route/>
         
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </>
  );
}