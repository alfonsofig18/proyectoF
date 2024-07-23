import React from 'react';
import styled from 'styled-components';

const Novedades = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <ShowName className='mb-4'>Últimas novedades</ShowName>
                <p className="mb-0">Página para mostrar los últimos añadidos de Appse</p>
            </div>
        </div>
    );
}

const ShowName = styled.h4`
font-size: clamp(2.4rem, 2.315rem + 0.425vw, 2.7rem);
letter-spacing: -0.1rem;
`;

export default Novedades;