import React, { Suspense, useEffect } from 'react';
import Sidebar from './Sidebar';
import Container from './layouts/Container';
import PageTitle from './Page_title';
import ContainerSection from './layouts/ContainerSection';
import SectionSmallButtons from './layouts/SectionSmallButtons';
import SmallButtons from './SmallButtons';
// import { useAuthStateChange } from './hooks/onAuthStateChange';
// import styled from 'styled-components';
// import { setUser } from './features/user/userSlice';
// import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Citas = () => {
    // useAuthStateChange();
    // const dispatch = useDispatch();
    // const local = JSON.parse(localStorage.getItem('user'));
    // dispatch(setUser({ ...local }))
    return (
        <>
            <Sidebar />
            <Container>
                <PageTitle title={'Citas'} icon={'bx-calendar-event'} />
                <main className="main-content">
                    <section className="position-relative">
                        <ContainerSection>
                            {/* Botones SPA */}
                            <SectionSmallButtons>
                                <SmallButtons rute={'index'} title={'index'} group={'citas'} />
                                <SmallButtons rute={'estadoDeCitas'} title={'Citas agendadas'} group={'citas'} btnDisabled={false} />
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


export default Citas;