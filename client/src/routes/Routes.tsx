import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home";
import Login from '../pages/login';
import SignUp from '../pages/signUp';
import ProtectedLayout from '../components/protectedLayout';

function Routies(){
    return (
        <Routes>
            <Route path="/" element={
                <ProtectedLayout>
                    <Home/>
                </ProtectedLayout>
            }/>
            <Route path="/login" element={
                <Login />
            }/>
            <Route path="/signUp" element={
                <SignUp />
            }/>
        </Routes>
    );
}

export default Routies;