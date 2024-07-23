import React, { useContext } from 'react';
import img404 from '../theme/assets/img/graphics/illustration/404.svg';
// import { UserContext } from './context/UserContext';
import Sidebar from './Sidebar';
import SidebarAdmin from './layouts/SidebarAdmin';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const NotFound = () => {
    // const { userOnSesion } = useContext(UserContext);
    const userRedux = useSelector((state) => state.user)
    return (
        <>
            {userRedux.rol_id === 2 ? (<Sidebar />) : (<SidebarAdmin />)}
            <Container authUser={userRedux.activo}>
                <main className="main-content d-grid" id="main-content">
                    <section className="position-relative overflow-hidden">
                        <div className="container pt-14 pt-lg-15 pb-9">
                            <div className="row">
                                <div className="col-md-10 col-lg-8 mx-auto text-center position-relative">

                                    <div className=" position-relative z-1">

                                        <div className="text-danger mb-5">
                                            <img src={img404} className="width-18x mx-auto" alt="" />
                                        </div>
                                        <h1 className="display-1 mb-2">404</h1>
                                        <h2 className="mb-4">Oops! Esta página no se encuentra</h2>
                                        <p className="w-lg-75 lead mx-auto mb-5">
                                            La página que solicitaste no se encuentra o ha sido movida de lugar. No te preocupes, puedes volver al inicio. <b>Appse</b>.
                                        </p>
                                        <Link to={userRedux.rol_id === 2 ? '/home' : '/homeAdm'} className="fw-semibold"><i className="bx bx-left-arrow-alt lh-1 fw-normal me-2"></i>Regresar al inicio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Container>
        </>
    );
}

const Container = styled.div`
    position: relative;
    left: ${props => props.authUser === true ? '88px' : '0'};
    width: ${props => props.authUser === true ? 'calc(100% - 88px)' : '100%'};
    
    @media(max-width: 425px) {
    ${props => props.authUser === true ? `left: 60px; width: calc(100% - 60px);` : `left: 0; width: 100%`}
    }
`;

export default NotFound;