import React, { useEffect } from 'react';
import { IndexRoute } from './hooks/onAuthStateChange';
import Sidebar from './Sidebar';
import Container from './layouts/Container';
import PageTitle from './Page_title';

const Casos = () => {
    IndexRoute('/casos');

    return (
        <>
            <Sidebar />
            <Container>
                <PageTitle title={'Casos'} icon={'bx-book-reader'} />
            </Container>
        </>
    );
}

export default Casos;