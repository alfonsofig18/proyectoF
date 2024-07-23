import React, { useEffect } from 'react';
import { IndexRoute } from './hooks/onAuthStateChange';
import Sidebar from './Sidebar';
import Container from './layouts/Container';
import PageTitle from './Page_title';
import ContainerSection from './layouts/ContainerSection';

const Emergencia = () => {
    IndexRoute('/emergencia');

    return (
        <>
            <Sidebar />
            <Container>
                <PageTitle title={'Emergencia'} icon={'bxs-traffic-barrier'} />
                <main className="main-content">
                    <section className='position-relative'>
                        <ContainerSection className='container mt-3'>
                            <h3>Holas</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio doloremque laboriosam praesentium, ex quisquam cum accusantium eligendi eius deserunt incidunt asperiores impedit facilis quae a quam reprehenderit sequi tempora? Cum omnis atque rerum veritatis mollitia rem nesciunt non autem a, libero impedit asperiores labore exercitationem? Fugit perspiciatis unde accusantium.</p>
                        </ContainerSection>
                    </section>
                </main>
            </Container>
        </>
    );
}

export default Emergencia;