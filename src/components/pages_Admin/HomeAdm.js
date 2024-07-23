import React, { Suspense, useEffect } from 'react';
import { useAuthStateChange } from '../hooks/onAuthStateChange';
// import Header from './Header';
import SidebarAdmin from '../layouts/SidebarAdmin';
import Container from '../layouts/Container';
import PageTitle from '../Page_title';
import ContainerSection from '../layouts/ContainerSection';
import SectionSmallButtons from '../layouts/SectionSmallButtons';
import SmallButtons from '../SmallButtons';
import { Outlet } from 'react-router-dom';
// import { setAuthFalse, setAuthTrue, clearUser } from '../features/user/userSlice';
// import { useDispatch } from 'react-redux';
// import { isAuth } from '../features/user/thunks';

const HomeAdm = () => {
    // useAuthStateChange();
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const authCheck = async () => {
    //         try {
    //             const result = await dispatch(isAuth());
    //             if (result) {
    //                 dispatch(setAuthTrue());
    //             } else {
    //                 dispatch(setAuthFalse());
    //                 dispatch(clearUser());
    //                 localStorage.removeItem('AU2');
    //                 navigate('/signIn', { replace: true });
    //             }
    //         }
    //         catch (err) {
    //             console.error(err);
    //         }
    //     }
    //     authCheck();
    // }, [navigate, dispatch])

    return (
        <>
            {/* <Header></Header> */}
            <SidebarAdmin />
            <Container>
                <PageTitle title={'Inicio'} icon={'bx-home-heart'} />
                <main className="main-content" id="main-content">
                    <section className="position-relative">
                        <ContainerSection>
                            {/* Botones SPA */}
                            <SectionSmallButtons>
                                <SmallButtons rute={'index'} title={'index'} group={'inicio'} />
                                <SmallButtons rute={'estadoDeCitasAdm'} title={'Listado de citas'} group={'inicio'} />
                                <SmallButtons rute={'NO'} title={'Listado de casos'} group={'inicio'} btnDisabled={true} />
                                <SmallButtons rute={'novedades'} icon={'bi bi-stars'} title={'Novedades'} group={'inicio'} btnDisabled={true} />
                            </SectionSmallButtons>
                            {/* Botones SPA */}
                            {/* Renderizado SPA */}
                            <Suspense>
                                <Outlet />
                            </Suspense>
                            {/* Renderizado SPA */}
                        </ContainerSection>
                    </section>
                </main>
            </Container>
        </>
    );
}

export default HomeAdm;