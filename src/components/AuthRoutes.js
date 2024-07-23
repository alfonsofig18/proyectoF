import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignUpPsicologo from './SignUpPsicologo';
import PageLogOut from './PageLogOut';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/signUpPsicologo' element={<SignUpPsicologo />} />
            <Route path='/logOut' element={<PageLogOut />} />
        </Routes>
    );
}

export default AuthRoutes;