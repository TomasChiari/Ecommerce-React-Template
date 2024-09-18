import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import { LogInForm } from "./components/LogInForm/LogInForm";


export const App = () => {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          
          <Route path="*" element={<Navigate to="auth" replace/>}/>
          <Route path="auth" index element={}/>
          <Route/>
         
        </Routes>
      </BrowserRouter>       */}
      <LogInForm />
    </>
  );
}