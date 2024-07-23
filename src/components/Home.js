import React, { Suspense } from 'react';
import { useAuthStateChange } from './hooks/onAuthStateChange';
import Header from './Header';
import Sidebar from './Sidebar';
import Container from './layouts/Container';
import PageTitle from './Page_title';
import ContainerSection from './layouts/ContainerSection';
import SectionSmallButtons from './layouts/SectionSmallButtons';
import SmallButtons from './SmallButtons';
import { Outlet } from 'react-router-dom';

const Home = () => {
    useAuthStateChange();

    return (
        <>
            {/* <Header></Header> */}
            <Sidebar />
            <Container>
                <PageTitle title={'Inicio'} icon={'bx-home-heart'} />
                <main className="main-content" id="main-content">
                    <section className="position-relative">
                        <ContainerSection>
                            {/* Botones SPA */}
                            <SectionSmallButtons>
                                <SmallButtons rute={'index'} title={'index'} group={'inicio'} />
                                <SmallButtons rute={'NO'} title={'Emergencia'} group={'inicio'} btnDisabled={true} />
                                <SmallButtons rute={'estadoDeCitas'} title={'Mis citas'} group={'inicio'} />
                                <SmallButtons rute={'NO'} title={'Mis casos'} group={'inicio'} btnDisabled={true} />
                                <SmallButtons rute={'novedades'} icon={'bi bi-stars'} title={'Novedades'} group={'inicio'} />
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

export default Home;