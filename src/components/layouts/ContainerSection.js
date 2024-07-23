import React from 'react';
import styled from 'styled-components';

const ContainerSection = ({ children }) => {
    return (
        <ClassContainer className='container mt-1'>
            {children}
        </ClassContainer>
    );
}

const ClassContainer = styled.div`
@media (min-width: 426px) {
    min-width: 100%;
    padding: 0 3.1rem;
    }
`;

export default ContainerSection;