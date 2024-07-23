import React, { Suspense } from 'react';
import SidebarAdmin from '../layouts/SidebarAdmin';
import Container from '../layouts/Container';
import PageTitle from '../Page_title';
import ContainerSection from '../layouts/ContainerSection';
import SectionSmallButtons from '../layouts/SectionSmallButtons';
import SmallButtons from '../SmallButtons';
import { Outlet } from 'react-router-dom';

const CitasAdm = () => {
    return (
        <>
            <SidebarAdmin />
            <Container>
                <PageTitle title={'Citas'} icon={'bx-calendar-event'} />
                <main className="main-content">
                    <section className="position-relative">
                        <ContainerSection>
                            {/* Botones SPA */}
                            <SectionSmallButtons>
                                <SmallButtons rute={'index'} title={'index'} group={'citas'} />
                                <SmallButtons rute={'estadoDeCitasAdm'} title={'Citas agendadas'} group={'citas'} btnDisabled={false} />
                                <SmallButtons rute={'newcitaAdm'} title={'Crear cita'} group={'citas'} btnDisabled={false} />
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


export default CitasAdm;