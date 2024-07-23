import React from 'react';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './theme/assets/css/theme.min.css';
import './theme/assets/fonts/boxicons/css/boxicons.min.css';
import './theme/assets/fonts/bootstrap-icons/bootstrap-icons.css';
// import { UserProvider } from './components/context/UserContext';
import GlobalIndex from './components/GlobalIndex';
import AuthRoutes from './components/AuthRoutes'
import { Route, Router, Routes } from 'react-router-dom';

{/* Routing páginas principales*/ }
{/* Rutas de autenticación */ }
{/* <Router>
  <Routes>
    <Route path='/*' element={<GlobalIndex />} />
    <Route path='/auth/*' element={<AuthRoutes />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
</Router> */}
function App() {
  return (
    <>
      <GlobalIndex />
      {/* <AuthRoutes /> */}
    </>
  );
}

export default App;
