import React, { lazy, useState } from 'react';
// import IndexHome from './IndexHome';
// import Novedades from './PageNovedades';
// import IndexCitas from './IndexCitas';
// import NewCita from './NewCita';
// import EstadoDeCitas from './EstadoDeCitas';

import Home from './Home';
import HomeAdmin from './pages_Admin/HomeAdm';
import Emergencia from './Emergencia';
import Citas from './Citas';
import CitasAdm from './pages_Admin/CitasAdm';
import Casos from './Casos';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignUpPsicologo from './SignUpPsicologo';
import PageLogOut from './PageLogOut';
import NotFound from './NotFound';
import { ProtectedRoute, ProtectedRouteAdmin } from './ProtectedRoute';
import { useAuthStateChange } from './hooks/onAuthStateChange';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

const IndexHome = lazy(() => import('./IndexHome'));
const NewCita = lazy(() => import('./NewCita'));
const Novedades = lazy(() => import('./PageNovedades'));
const IndexCitas = lazy(() => import('./IndexCitas'));
const EstadoDeCitas = lazy(() => import('./EstadoDeCitas'));

const IndexHomeAdm = lazy(() => import('./pages_Admin/IndexHomeAdm'));
const IndexCitasAdm = lazy(() => import('./pages_Admin/IndexCitasAdm'));
const NewCitaAdm = lazy(() => import('./pages_Admin/NewCitaAdm'));
const EstadoDeCitasAdm = lazy(() => import('./pages_Admin/EstadoDeCitasAdm'));

const GlobalIndex = () => {
    // useAuthStateChange();
    const [isUser, setIsUser] = useState(null);
    const userRedux = useSelector((state) => state.user);

    return (
        <Routes>
            <Route element={<ProtectedRoute canActivate={userRedux.isAuth} role={userRedux.rol_id} />}>
                <Route path='/' element={<Navigate to={'/home'} replace />} />
                <Route path='/home' element={<Home />}>
                    <Route index element={<Navigate to={'index'} />} />
                    <Route path='index' element={<IndexHome />} />
                    <Route path='estadoDeCitas' element={<EstadoDeCitas />} />
                    <Route path='novedades' element={<Novedades />} />
                </Route>
                <Route path='/emergencia' element={<Emergencia />} />
                <Route path='/citas' element={<Citas />}>
                    <Route index element={<Navigate to={'index'} />} />
                    <Route path='index' element={<IndexCitas />} />
                    <Route path='newcita' element={<NewCita />} />
                    <Route path='estadoDeCitas' element={<EstadoDeCitas />} />
                </Route>
                <Route path='/casos' element={<Casos />} />
            </Route>
            <Route element={<ProtectedRouteAdmin canActivate={userRedux.isAuth} role={userRedux.rol_id} />}>
                <Route path='/' element={<Navigate to={'/homeAdm'} replace />} />
                <Route path='/homeAdm' element={<HomeAdmin />}>
                    <Route index element={<Navigate to={'index'} />} />
                    <Route path='index' element={<IndexHomeAdm />} />
                    <Route path='estadoDeCitasAdm' element={<EstadoDeCitasAdm />} />
                </Route>
                <Route path='/citasAdm' element={<CitasAdm />}>
                    <Route index element={<Navigate to={'index'} />} />
                    <Route path='index' element={<IndexCitasAdm />} />
                    <Route path='estadoDeCitasAdm' element={<EstadoDeCitasAdm />} />
                    <Route path='newcitaAdm' element={<NewCitaAdm />} />
                </Route>
            </Route>
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/signUpPsicologo' element={<SignUpPsicologo />} />
            <Route path='/logOut' element={<PageLogOut />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default GlobalIndex;